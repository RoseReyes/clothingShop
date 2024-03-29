import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer, 
  EmptyMessage, 
  CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckOut = () => {
    navigate('check-out');
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />)
          ) : (
            <EmptyMessage> Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={navigateToCheckOut}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

