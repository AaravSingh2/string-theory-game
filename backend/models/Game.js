import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
