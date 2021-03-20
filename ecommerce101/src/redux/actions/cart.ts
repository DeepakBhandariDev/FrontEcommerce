import { Dispatch } from 'redux'

import {
  Product,
  CartActions,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  ADD_QTY,
  SUBTRACT_QUANTITY_CART_ITEM
} from '../../types'


export function addToCart(product: Product): CartActions {
  let quantityToAdd = 1;
  return {
    type: "ADD_TO_CART",
    payload: { product, quantityToAdd}
  }
}

export function deleteCartItem(product: Product) {
  let quantityToSub = 1;
  return {
    type: 'DELETE_CART_ITEM',
    payload: { product, quantityToSub }
  }
}
export function addQuantity(_id: string) {
  let quantityToAdd = 1;
  return {
    type: "ADD_TO_CART",
    payload: { _id, quantityToAdd }
  }
}

