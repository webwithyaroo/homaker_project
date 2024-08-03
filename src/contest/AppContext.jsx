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

  //CART
  const [cart, setCart] = useState([]);

  const addToCart = (image) => {
    setCart((prevCart) => {
      const existingInCart =
        prevCart && prevCart.find((item) => item.id == image.id);
      if (existingInCart) {
        return prevCart.map((item) => ({
          ...item,
          quantity: (item.quantity += 1),
        }));
      } else {
        return [...prevCart, { ...image, quantity: 1 }];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
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
