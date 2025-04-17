import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './startPage';
import GameOptions from './GameOptions'; // Import the new page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game-options" element={<GameOptions />} />
      </Routes>
    </Router>
  );
};

export default App;
