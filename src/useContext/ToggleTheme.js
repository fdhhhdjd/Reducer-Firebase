import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  //states
  const [theme, setTheme] = useState({
    isFlag: false,
    dark: {
      backgroundColor: "#333",
      color: "white",
    },
    light: {
      backgroundColor: "#eee",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
    },
  });
  const ToggleTheme = () => {
    setTheme({
      ...theme,
      isFlag: !theme.isFlag,
    });
  };
  const ThemeContextData = {
    theme,
    setTheme,
    ToggleTheme,
  };
  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
