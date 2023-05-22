import Flashcard from '../models/flashcard.js';

// Get all flashcards
const getAllFlashcards =  async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific flashcard by its ID
const getFlashcardbyID = async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    res.json(flashcard);
  } catch (error) {
    res.status(404).json({ message: 'Flashcard not found' });
  }
};

// Create a new flashcard
const createFlashcard = async (req, res) => {
  const flashcard = new Flashcard({
    question: req.body.question,
    answer: req.body.answer,
    // other flashcard properties
  });

  try {
    const newFlashcard = await flashcard.save();
    res.status(201).json(newFlashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a specific flashcard by its ID
const editFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flashcard);
  } catch (error) {
    res.status(404).json({ message: 'Flashcard not found' });
  }
};

// Delete a specific flashcard by its ID
const deleteFlashcard =  async (req, res) => {
  try {
    await Flashcard.findByIdAndRemove(req.params.id);
    res.json({ message: 'Flashcard deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Flashcard not found' });
  }
};

// Scheduling algorithm based on Anki
const scheduleFlashcard = (flashcard) => {
  const { interval, ease } = flashcard;

  if (flashcard.grade === 'again') {
    flashcard.interval = 1; // Reset the interval to the initial value
    flashcard.ease = Math.max(1.3, ease - 0.2); // Decrease the ease by 0.2 but not below 1.3
  } else if (flashcard.grade === 'hard') {
    flashcard.interval = Math.ceil(interval * 1.2); // Multiply the interval by 1.2
    flashcard.ease = Math.max(1.3, ease - 0.15); // Decrease the ease by 0.15 but not below 1.3
  } else if (flashcard.grade === 'good') {
    flashcard.interval = Math.ceil(interval * ease); // Multiply the interval by the ease
    flashcard.ease = ease; // Keep the ease unchanged
  } else if (flashcard.grade === 'easy') {
    flashcard.interval = Math.ceil(interval * ease * 1.3); // Multiply the interval by the ease and a bonus factor of 1.3
    flashcard.ease = Math.min(2.5, ease + 0.15); // Increase the ease by 0.15 but not above 2.5
  }

  flashcard.dueDate = new Date(Date.now() + flashcard.interval * 24 * 60 * 60 * 1000); // Calculate the next due date

  return flashcard;
};

// Update flashcard grade and schedule it
export const updateFlashcard = async (req, res) => {
  const { flashcardId, grade } = req.body;

  try {
    const flashcard = await Flashcard.findById(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }

    flashcard.grade = grade;
    const scheduledFlashcard = scheduleFlashcard(flashcard);

    await scheduledFlashcard.save();

    res.status(200).json({ message: 'Flashcard updated and scheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update and schedule flashcard', error: error.message });
  }
};

export {
  getAllFlashcards,
  getFlashcardbyID,
  createFlashcard,
  editFlashcard,
  deleteFlashcard,
  updateFlashcard,
};

