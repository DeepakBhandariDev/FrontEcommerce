import {
    CartState,
    CartActions,
    ADD_TO_CART,
    ADD_ALL_PRODUCTS_TO_CART,
    REMOVE_FROM_CART,
  } from '../../types'
  
  
  const initialState: CartState = {
    cartProducts: []
  }
  
  export default function products(
    state= initialState,
    action: CartActions
  ): CartState {
    switch (action.type) {
    case ADD_ALL_PRODUCTS_TO_CART: {
      const { products } = action.payload
      return { ...state, cartProducts: products}
      }
     
    case ADD_TO_CART: {
      const { product } = action.payload
      if (state.cartProducts.find((p) => p.name === product.name)){
          return state
      }
      return { ...state, cartProducts: [...state.cartProducts, product]}
    }
    case REMOVE_FROM_CART: {
        const { _id } = action.payload
        const index = state.cartProducts.findIndex((p) => p._id === _id )
        if (index >= 0){
            state.cartProducts.splice(index, 1)
            return { ...state, cartProducts: [...state.cartProducts]}
        }
        return state
    }
    
  
    default:
      return state
    }
  }
  