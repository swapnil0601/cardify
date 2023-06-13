import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import cloudinary from "cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// Controller function to handle user registration
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, profileImg } = req.body;

    

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upload profile image to Cloudinary
    const uploadedImage = await cloudinaryV2.uploader.upload(profileImg, {
      upload_preset: "profile_image",
      public_id: `${username}avatar`,
      allowed_formats: ["jpg", "png", "jpeg"],
    });

    console.log(uploadedImage);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      profileImg: uploadedImage.secure_url,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
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
