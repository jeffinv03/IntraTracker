import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { teamList } from './Players';
import "./Timer.css";
import { useNavigate } from 'react-router-dom';
import { useGame } from './GameContext'; // Adjust the path as necessary



// Individual Clock component for each player
const PlayerClock = ({ player, timer, toggleTimer }) => {
  return (
    <div className="player-clock">
      <h3>{player.name}'s Time: {new Date(timer.seconds * 1000).toISOString().substr(11, 8)}</h3>
      <Button variant={timer.isActive ? 'danger' : 'success'} onClick={toggleTimer}>
        {timer.isActive ? 'Pause' : 'Start'}
      </Button>
      {/* The reset button should also be adjusted to call a prop method if required */}
    </div>
  );
};


// Timer component to display all players' clocks
function Timer() {
  const navigate = useNavigate();
  const { playerTimes, updatePlayerTimes } = useGame(); // Use the context to get the update function

  const [timers, setTimers] = useState(
    teamList.reduce((acc, player) => {
      acc[player.name] = { seconds: 0, isActive: false };
      return acc;
    }, {})
  );

  const toggleTimer = (playerName) => {
    setTimers((prevTimers) => {
      const isActive = !prevTimers[playerName].isActive;
      const newTimers = {
        ...prevTimers,
        [playerName]: { ...prevTimers[playerName], isActive: isActive }
      };

      // If we're pausing the timer, update the player's time in the context
      if (!isActive) {
        const timeString = new Date(prevTimers[playerName].seconds * 1000).toISOString().substr(11, 8);
        updatePlayerTimes(playerName, timeString);
      }

      return newTimers;
    });
  };

  useEffect(() => {
    const activeTimers = Object.entries(timers).filter(([, timer]) => timer.isActive);
    if (activeTimers.length === 0) return;

    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const newTimers = { ...prevTimers };
        activeTimers.forEach(([playerName]) => {
          newTimers[playerName].seconds = newTimers[playerName].seconds + 1;
        });
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timers]);

  const endGame = () => {
    // Update the time for all players before navigating away
    Object.keys(timers).forEach((playerName) => {
      const timeString = new Date(timers[playerName].seconds * 1000).toISOString().substr(11, 8);
      updatePlayerTimes(playerName, timeString);
    });

    navigate('/endGame');
  };

  return (
    <div className="timer">
      {teamList.map((player) => (
        <PlayerClock key={player.name} player={player} timer={timers[player.name]} toggleTimer={() => toggleTimer(player.name)} />
      ))}
      <Button variant="warning" onClick={endGame} className="mt-3">End Game</Button>
    </div>
  );
}

export default Timer;
