
import { takeEvery } from 'redux-saga/effects'

import {
  ADD_TO_CART,
  AddToCart,
  Product,
  RemoveItem,
  
  REMOVE_ITEM
} from '../../types'

const makeChangesToLocalStorage = (cartProducts: Product[]) => {
  localStorage.setItem('cart', JSON.stringify(cartProducts))
}

const saveProduct= (product: Product) => {
  const cartJson = localStorage.getItem('cart')
  let cartProducts: Product[] = cartJson !== null ? JSON.parse(cartJson) : []
  cartProducts = [...cartProducts, product]
  makeChangesToLocalStorage(cartProducts)
}

const removeProduct = (product: Product) => {
  const cartJson = localStorage.getItem('cart')
  let cartProducts: Product[] = cartJson !== null ? JSON.parse(cartJson) : []
  cartProducts = cartProducts.filter(
    (product) => product !== product
  )
  makeChangesToLocalStorage(cartProducts)
}






function* saveProductToCart(action: AddToCart) {
  yield saveProduct(action.payload.product)
}

function* removeProductFromCart(action: RemoveItem) {
  yield removeProduct(action.payload.product)
}

export default [
  takeEvery(ADD_TO_CART, saveProductToCart),
  takeEvery(REMOVE_ITEM, removeProductFromCart)
]
