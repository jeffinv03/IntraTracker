import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext({
  playerTimes: {},
  updatePlayerTimes: () => {},
});

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [playerTimes, setPlayerTimes] = useState({});

  const updatePlayerTimes = (name, time) => {
    setPlayerTimes(prevTimes => ({
      ...prevTimes,
      [name]: time
    }));
  };

  return (
    <GameContext.Provider value={{ playerTimes, updatePlayerTimes }}>
      {children}
    </GameContext.Provider>
  );
};
