import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("night");

  return (
    <ThemeContext.Provider value={{themeName, setThemeName}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
