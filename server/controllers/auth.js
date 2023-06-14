import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
// Register a new user
const registerUser = async (req, res) => {
  const { firstName, lastName, username, email, password } =
    req.body;
  // console.log(req.body);
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await user.save();
    console.log(savedUser);
    res
      .status(201)
      .json({ message: "User registered successfully", savedUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    // Check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "User Doesn't Exist" });
    }
    console.log(user);
    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error: error.message });
  }
};

export { registerUser, loginUser };
