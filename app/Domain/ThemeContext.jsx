
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHamOpen, setIsHamOpen] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, isHamOpen, setIsHamOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
