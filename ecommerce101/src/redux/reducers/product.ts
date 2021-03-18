import {
  ProductsState,
  ProductsActions,
  ADD_ALL_PRODUCTS,
  POST_PRODUCT
} from "./../../types";

const initialState: ProductsState = {
  products: [],
};

export default function products(
  state = initialState,
  action: ProductsActions
): ProductsState {
  switch (action.type) {
    case ADD_ALL_PRODUCTS: {
      const { products } = action.payload;
      return {
        ...state,
        products: [...products],
      };
    }

    case POST_PRODUCT: {
        const { product } = action.payload;
        return {
          products: [...state.products,product],
        };
      }
    default:
      return state;
  }
}
