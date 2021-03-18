

import {
    AuthState,
    LoginAction,
    LOGIN_USER,
  } from '../../types'
  
  
  const initialState: AuthState = {
    token: "" ,
    isAuthenticated: false,
    user:{
        isAdmin: false,
        _id: "",
        name: "",
        email: "",
        imageUrl: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
    }
  }
  
  export default function Login(
    state= initialState,
    action: LoginAction
  ): AuthState {
    switch (action.type) {
      case LOGIN_USER: {
          const { user,token } = action.payload
        return {
          token: token,
          isAuthenticated: true,
          user: user
        }
      }

      // Always return new state (e.g, new object) if changed
    
  
    default:
      return state
    }
  }
  
  
  