import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [activeGame, setActiveGame] = useState({
    id: 'bgmi',
    name: 'BGMI',
    themeColor: '#F59E0B', // Amber for BGMI
    icon: 'B'
  });

  const supportedGames = [
    { id: 'bgmi', name: 'BGMI', themeColor: '#F59E0B', icon: 'B' },
    { id: 'freefire', name: 'Free Fire', themeColor: '#EF4444', icon: 'F' },
    { id: 'codm', name: 'Call of Duty', themeColor: '#3B82F6', icon: 'C' },
    { id: 'valorant', name: 'Valorant', themeColor: '#EC4899', icon: 'V' }
  ];

  const switchGame = (gameId) => {
    const game = supportedGames.find(g => g.id === gameId);
    if (game) setActiveGame(game);
  };

  return (
    <GameContext.Provider value={{ activeGame, supportedGames, switchGame }}>
      {children}
    </GameContext.Provider>
  );
};
