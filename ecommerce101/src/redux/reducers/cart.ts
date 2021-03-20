import {
  Product,
  CartActions,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  SUBTRACT_QUANTITY_CART_ITEM,
  CartState,
  ADD_QTY,
} from "../../types";

const initialState: CartState = {
  cartProducts: [],
};

export default function products(
  state = initialState,
  action: CartActions
): CartState {
  let newQuantity;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload
      
      const savedProduct = state.cartProducts.find(p=>p._id===product._id);
      if(savedProduct){
        if(savedProduct.quantity){
          const total: number = savedProduct.quantity
          product.quantity =  total + 1
        }
  
        const updatedProducts = state.cartProducts.map(p => p._id === product._id ? product : p)
        return {
          ...state,
          cartProducts: [...updatedProducts]
        };
      }else{
        product.quantity =  1
        return {
          ...state,
          cartProducts: [...state.cartProducts, product]
        };
      }
      
      case "DELETE_CART_ITEM":{
      const index = state.cartProducts.findIndex((p) => p === action.payload.product )
        if (index >= 0){
            state.cartProducts.splice(index, 1)
            return { ...state, cartProducts: [...state.cartProducts]
            }
        }
        return state
      }
      case "ADD_QTY":
      return {
        ...state,
        cartProducts: state.cartProducts.map(el => {
          if (el._id === action.payload._id) {
            return {
              ...el,
              quantity: el.quantity as number + 1,
            }
          }

          return el;
        })
      };
    default:
      return state;
  }
}
