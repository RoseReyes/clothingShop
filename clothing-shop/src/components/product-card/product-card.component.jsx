import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import {
  ProductCardContainer, 
  ProductCardImage, 
  ProducCardFooter, 
  ProductName, 
  ProductPrice
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProducCardFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProducCardFooter>
      <Button buttonType="inverse" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
