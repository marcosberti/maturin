import React from 'react';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = React.useCallback((id, cantidad) => {
    const items = new Array(cantidad).fill(id);
    setCartItems((prevItems) => [...prevItems, ...items]);
  }, []);

  const deleteFromCart = React.useCallback((libro) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== libro.id));
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteFromCart }}
      {...props}
    />
  );
};
const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartContext');
  }
  return context;
};

export { CartProvider, useCart };
