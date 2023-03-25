import { createContext, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  
  if (existCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => 
    setCartItems(addCartItems(cartItems, product));
  
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};