import Deck from "../models/deck.js";

// Get all decks
const getAllDecks = async (req, res) => {
  try {
    const decks = await Deck.find();
    res.json(decks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific deck by its ID
const getDeckById = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    res.json(deck);
  } catch (error) {
    res.status(404).json({ message: "Deck not found" });
  }
};

// Create a new deck
const createDeck = async (req, res) => {
  const deck = new Deck(req.body);

  try {
    const newDeck = await deck.save();
    res.status(201).json(newDeck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a specific deck by its ID
const updateDeck = async (req, res) => {
  try {
    const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(deck);
  } catch (error) {
    res.status(404).json({ message: "Deck not found" });
  }
};

// Delete a specific deck by its ID
const deleteDeck = async (req, res) => {
  try {
    await Deck.findByIdAndRemove(req.params.id);
    res.json({ message: "Deck deleted" });
  } catch (error) {
    res.status(404).json({ message: "Deck not found" });
  }
};

export { getAllDecks, getDeckById, createDeck, updateDeck, deleteDeck };
