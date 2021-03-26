import {
  Product,
  CartActions,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  CartState,
  ADD_QUANTITY,
  ADD_ALL_PRODUCTS_TO_CART,
} from "../../types";

const initialState: CartState = {
  cartProducts: [],
  total: 0,
};

export default function cart(
  state = initialState,
  action: CartActions
): CartState {
  let newQuantity;
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product } = action.payload;
      const prodExists = state.cartProducts.find((p) => p._id === product._id);
      if (prodExists) {
        return { ...state };
      } else {
        const total: number = product.price + state.total;
        product.quantity = 1;
        return {
          ...state,
          cartProducts: [...state.cartProducts.concat(product)],
          total: total,
        };
      }
    }
    case "REMOVE_ITEM": {
      const { product } = action.payload;
      const total: number = state.total - product.price;
      product.quantity = 0;
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter((p) => p._id !== product._id),
        ],
        total: total,
      };
    }

    case "ADD_QUANTITY": {
      const { product } = action.payload;
      const savedProduct = state.cartProducts.find(
        (p) => p._id === product._id
      );
      if (savedProduct) {
        if (savedProduct.quantity) {
          const current: number = savedProduct.quantity;
          product.quantity = current + 1;
        }
        const total: number = (product.quantity as number - 1) * product.price;
        const updatedProducts = state.cartProducts.map((p) =>
          p._id === product._id ? product : p
        );
        return {
          ...state,
          cartProducts: [...updatedProducts],
          total: state.total + total,
        };
      } else {
        product.quantity = 1;
        return {
          ...state,
          cartProducts: [...state.cartProducts, product],
          total: state.total + product.price,
        };
      }
    }
    case "SUB_QUANTITY": {
      const { product } = action.payload;
      const savedProduct = state.cartProducts.find(
        (p) => p._id === product._id
      );
      if (savedProduct) {
        if (savedProduct.quantity) {
          const current: number = savedProduct.quantity;
          product.quantity = current - 1;
        }
        const total: number =
          state.total - (product.quantity as number - 1) * product.price;

        const updatedProducts = state.cartProducts.map((p) =>
          p._id === product._id ? product : p
        );
        return {
          ...state,
          cartProducts: [...updatedProducts],
          total: total,
        };
      } else {
        product.quantity = 0;
        return {
          ...state,
          cartProducts: [...state.cartProducts, product],
          total: state.total - product.price,
        };
      }
    }
    case "ADD_ALL_PRODUCTS_TO_CART":{
      const { cartProducts } = action.payload
    return { ...state, cartProducts}
    }
    default:
      return state;
  }
}
