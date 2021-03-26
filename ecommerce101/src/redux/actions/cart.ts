import { POST_ORDER, ShippingAddress, PostOrderAction } from './../../types';
import { Dispatch } from 'redux'
import axios from 'axios'
import {
  Product,
  CartActions,
  ADD_TO_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  REMOVE_ITEM,
  ADD_ALL_PRODUCTS_TO_CART,
  ADD_ALL_ORDER,
  OrderAction,
  Order
} from '../../types'


export function addToCart(product: Product): CartActions {
  let quantityToAdd = 1;
  return {
    type: "ADD_TO_CART",
    payload: { product, quantityToAdd}
  }
}

export function removeItem(product:Product): CartActions {
  return{
      type: "REMOVE_ITEM",
      payload: {product }
  }
}

export function subtractQuantity(product:Product): CartActions {
  return{
      type: "SUB_QUANTITY",
      payload: {product }
  }
}
//add qt action
export function addQuantity(product:Product): CartActions {
  return{
      type: "ADD_QUANTITY",
      payload: { product }
  }
}

export function postOrder(shippingAddress:ShippingAddress): PostOrderAction {
  return{
      type: POST_ORDER,
      payload: { shippingAddress}
  }
}

export function addAllProductsCart(cartProducts: Product[]): CartActions{
  return {
    type: ADD_ALL_PRODUCTS_TO_CART,
    payload:{
      cartProducts,
    }
  }
}

export function addAllOrders(orders: Order[]): OrderAction{
  return {
      type: ADD_ALL_ORDER,
      payload: {
          orders,
      }

  }
}

export function getAllOrders() {
  return async (dispatch: Dispatch) => {
    try{
      const baseUrl = "http://localhost:5000/api/v1/order"
      const res = await fetch(baseUrl)
      const data = await res.json()
      dispatch(addAllOrders(data))
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}


