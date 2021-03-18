import { Dispatch } from 'redux'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  Product,
  CartActions,
  ADD_ALL_PRODUCTS_TO_CART
} from '../../types'



export function addToCart(product: Product): CartActions {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  }
}

export function removeFromCart(_id: string): CartActions {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      _id,
    },
  }
}

export function AddAllCountriesToCartAction(products: Product[]): CartActions {
    return {
        type: ADD_ALL_PRODUCTS_TO_CART,
        payload: {
            products,
        }
    }
}


