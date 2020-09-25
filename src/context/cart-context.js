import React from 'react';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = React.useCallback((libro) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(({ id }) => id === libro.id) || {
        id: libro.id,
        cantidad: 0,
      };

      return [
        ...prevItems.filter(({ id }) => id !== libro.id),
        { ...item, cantidad: item.cantidad + 1 },
      ];
    });
  }, []);

  const deleteFromCart = React.useCallback((libro) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(({ id }) => id === libro.id) || {
        id: libro.id,
        cantidad: 0,
      };
      const newItems = prevItems.filter(({ id }) => id !== libro.id);

      if (item.cantidad && item.cantidad - 1 > 0) {
        newItems.push({ ...item, cantidad: item.cantidad - 1 });
      }

      return newItems;
    });
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
