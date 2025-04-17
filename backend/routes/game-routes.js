// routes/games.js

const express = require('express');  // Import express
const router = express.Router();     // Create a router object to define routes
import stringImg from '../assets/Images_with_Strings.jpg';

// Sample game data (this would typically come from a database)
const games = [
  { 
    _id: '1',
    name: 'STRING THEORY',
    description: 'A challenging string-based puzzle game.',
    difficulty: 'Medium',
    imageUrl: 'C:/Users/Aarav/Documents/GitHub/string-theory-game/frontend/src/assets/Alphabets_with_Strings.jpg',
    link: '/play/string-theory',  // Link to play the game
  },
  {
    _id: '2',
    name: 'Sudoku Solver',
    description: 'Solve intricate Sudoku puzzles.',
    difficulty: 'Hard',
    imageUrl: 'https://example.com/images/sudoku.jpg',
    link: '/play/sudoku',  // Link to play Sudoku
  },
  {
    _id: '3',
    name: 'Trivia Quest',
    description: 'Test your knowledge with fun trivia questions.',
    difficulty: 'Easy',
    imageUrl: 'https://example.com/images/trivia.jpg',
    link: '/play/trivia',  // Link to play Trivia
  },
];

// Define the /api/games route to send a list of games
router.get('/games', (req, res) => {
  res.json(games);  // Send the games list as a JSON response
});

// Export the router to use it in the main server file
module.exports = router;
