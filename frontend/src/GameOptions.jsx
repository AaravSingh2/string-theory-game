import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import './card.css';
import stringImg from './assets/Images_with_Strings.jpg';
import stringWord from './assets/Alphabets_with_Strings.jpg';
import stringRanImg from './assets/a beautiful but plain background image with a seamless border.png';
const GameOptions = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/games');
        if (!response.ok) {
          throw new Error('Error fetching games');
        }
        const data = await response.json();
        setGames(data);  // Set the fetched game data
      } catch (error) {
        console.log('Failed to load games');
      }
    };
    fetchGames();
  }, []);

  const getImageByIndex = (index) => {
    if (index === 0) {
      return stringWord; // First image for first index
    } else if (index === 1) {
      return  stringImg; // Second image for second index
    } else if (index === 2) {
      return stringRanImg; // Third image for third index
    } else {
      return '/assets/defaultImage.jpg'; // Default image if none of the above
    }
  };

  

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Choose Your Game
      </Typography>
      <Grid container spacing={3} justifyContent="center">
      {games.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={game._id}>
            <Card className="game-options-container">
              <CardMedia
                className="card-media"
                component="img"
                height="180"
                image={getImageByIndex(index)} // Dynamically choose image based on index
                alt={game.name}
              />
              <CardContent>
                <Typography variant="h5" component="div" className = "name">
                  {game.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className = "desc" paragraph>
                  {game.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" className = "diff">
                  Difficulty: <strong>{game.difficulty}</strong>
                </Typography>
              </CardContent>
              <Button
                className = "card-button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => (window.location.href = game.link)}
              >
                Play Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GameOptions;

