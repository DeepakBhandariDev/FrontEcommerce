import { all } from 'redux-saga/effects'
import cartSagas  from './cart'
import userSagas  from './user'
import localCart from './localCart'

export default function* rootSaga() {
  yield all([
    ...userSagas,
    ...cartSagas,
    ...localCart
  ])
}
