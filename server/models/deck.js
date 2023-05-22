//  Deck Schema
import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Deck name is required.'],
  },
  description: {
    type: String,
  },
  imgPath: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  flashcards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flashcard',
    },
  ],
  isPublic: {
    type: Boolean,
    default: false,
  },
  sharedWith: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Deck = mongoose.model('Deck', deckSchema);

export default Deck;
