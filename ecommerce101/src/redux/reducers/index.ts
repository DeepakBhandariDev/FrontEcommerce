import { combineReducers } from 'redux'

import user from './user'
import product from './product'
import cart from './cart'
import order from './order'
const createRootReducer = () =>
  combineReducers({
    user,
    product,
    cart,
    order
  })

export default createRootReducer