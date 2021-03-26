import {select,put, takeLatest} from 'redux-saga/effects'
import { AppState, AuthState, LoginAction, LOGIN_USER } from '../../types'
import { loginUser } from '../actions/user'


function* saveUserToLocalStorage(action:LoginAction){
    const user:AuthState = yield select((state:AppState) => state.user)
    yield localStorage.setItem('user',JSON.stringify(user))
}

function* getUserFromLocalStorage(){
    const localUser = localStorage.getItem('user')
  const user = localUser ? JSON.parse(localUser) : null
  if(user) yield put(loginUser(user.user,user.token))
}


export default [
    takeLatest(LOGIN_USER,saveUserToLocalStorage),
    takeLatest("GET_LOGGED_USER",getUserFromLocalStorage)
]