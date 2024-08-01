// AppProvider.jsx
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [clicked, setClicked] = useState(false);
  // products
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [images, setImages] = useState([]);
  function handleLoginShow() {
    setClicked((prevClicked) => !prevClicked);
  }

  return (
    <AppContext.Provider
      value={{
        clicked,
        setClicked,
        handleLoginShow,
        selectedProduct,
        setSelectedProduct,
        images,
        setImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
