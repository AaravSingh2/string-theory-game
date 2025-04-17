import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const StartPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/game-options'); // Navigate to the new page
  };

  return (
    <div className="App">
      <div className="background-container">
        <div className="overlay">
          <h1 className="game-title">
            {['S', 'T', 'R', 'I', 'N', 'G', '', 'T', 'H', 'E', 'O', 'R', 'Y'].map((letter, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
                {letter}
              </span>
            ))}
          </h1>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
