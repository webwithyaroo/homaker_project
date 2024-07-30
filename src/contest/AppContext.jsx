// AppProvider.jsx
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [clicked, setClicked] = useState(false);

  function handleLoginShow() {
    setClicked((prevClicked) => !prevClicked);
  }

  return (
    <AppContext.Provider value={{ clicked, setClicked, handleLoginShow }}>
      {children}
    </AppContext.Provider>
  );
}
