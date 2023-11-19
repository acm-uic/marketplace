import getProducts from './getProducts';
import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from './pocketbase'
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      console.log("Products: " + data);
      setProducts(data);
    };

    fetchProducts();
  }, []);


  function getURL(product) {
    return pb.files.getUrl(product, product?.img);
  }
  

  return (
    <ProductContext.Provider value={{ products, getURL}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};
