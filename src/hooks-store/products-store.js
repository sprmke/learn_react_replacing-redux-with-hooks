import { initStore } from './store';

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

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const { products } = currentState;
      const productIndex = products.findIndex(({ id }) => id === productId);

      const newFavStatus = !products[productIndex].isFavorite;
      const updatedProducts = [...products];
      updatedProducts[productIndex] = {
        ...products[productIndex],
        isFavorite: newFavStatus,
      };

      return { products: updatedProducts };
    },
  };

  initStore(actions, { products: defaultProductsState });
};

export default configureStore;
