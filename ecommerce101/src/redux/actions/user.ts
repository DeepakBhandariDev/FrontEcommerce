
//import Axios from 'axios';

import {LoginAction, User, LOGIN_USER} from '../../types'
import { Dispatch } from 'redux'
import axios from 'axios'

export function loginUser(user: User,token:string): LoginAction {
    return {
      type: LOGIN_USER,
      payload: {
        user,
        token,
      },
    }
  }
  

export function userToken(response: any) {
    return async (dispatch: Dispatch) => {
      try{
        axios
      .post("http://localhost:5000/google/login", {
        id_token: response.tokenObj.id_token,
      })
      .then((response) => {
        console.log(response);
        dispatch(loginUser(response.data.user, response.data.accessToken));
        localStorage.set('token', JSON.stringify(response.data.accessToken))
      })
      .catch((error) => {
        console.log(error);
      });
      } catch (error) {
        console.log(error)
      }
    }
  }