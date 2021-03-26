import { PostOrderAction, AppState, ShippingAddress } from './../../types';
import {select, call, takeLatest} from 'redux-saga/effects'
import { Product,POST_ORDER } from '../../types'
import axios from 'axios'

async function postOrder(items: Product[],address:ShippingAddress,token:string){
const order = await axios.post('http://localhost:5000/api/v1/order',{
   items:items,
   address:address
},{
    headers:{
        Athorization: `Bearer ${token}`
    }
})
 
}

function* createOrder(action:PostOrderAction){
    yield console.log(action.payload)
    const {cartProducts} = yield select((state:AppState) => state.cart)
    const {token} = yield select((state:AppState) => state.user)
    yield call(postOrder,cartProducts,action.payload.shippingAddress,token)
}

export default [
    takeLatest(POST_ORDER,createOrder),
]