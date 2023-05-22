import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryTitle, ProductCategoryContainer } from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      <ProductCategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductCategoryContainer>
    </Fragment>
  );
};

export default Category;
