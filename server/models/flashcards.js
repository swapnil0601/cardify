import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question is required.']
  },
  answer: {
    type: String,
    required: [true, 'Answer is required.']
  },
  grade: {
    type: String,
    enum: ['again', 'hard', 'good', 'easy'],
    default: 'again',
  },
  interval: {
    type: Number,
    default: 1,
  },
  ease: {
    type: Number,
    default: 2.5,
  },
  dueDate: {
    type: Date,
    default: Date.now(),
  },
  deck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Deck',
    required: [true, 'Deck is required.']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required.']
  }
},);

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

export default Flashcard;