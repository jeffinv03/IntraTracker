import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from './GameContext'; // Adjust the path as necessary
import { Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap for buttons

function EndGame() {
  const { playerTimes } = useGame();
  const navigate = useNavigate(); // Hook for navigation

  const goToHome = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div className="end-game">
      <h2>Game Ended. Player Stats:</h2>
      <ul>
        {Object.entries(playerTimes).map(([name, time]) => (
          <li key={name}>{`${name}'s Time: ${time}`}</li>
        ))}
      </ul>
      <Button onClick={goToHome} className="mt-3">Home</Button> {/* Button to go to home */}
    </div>
  );
}

export default EndGame;
