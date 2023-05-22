// User Model
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
  },
  lastName: {
    type: String,
    default: '',
  },
  username: {
    type: String,
    required: [true, 'Username is required.'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  prfileImg: {
    type: String,
    default: '',
  },
  decks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deck',
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;