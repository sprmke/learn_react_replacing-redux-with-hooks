import React, { useState } from 'react';

const defaultProductsState = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductsProvider = (props) => {
  const [products, setProducts] = useState(defaultProductsState);

  const toggleFavorite = (productId) => {
    setProducts((currentProducts) => {
      const productIndex = currentProducts.findIndex(
        ({ id }) => id === productId
      );

      const newFavStatus = !currentProducts[productIndex].isFavorite;
      const updatedProducts = [...currentProducts];
      updatedProducts[productIndex] = {
        ...currentProducts[productIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
