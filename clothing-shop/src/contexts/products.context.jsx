import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

// provider; the actual component that wrap around other components that needs the actual data
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
