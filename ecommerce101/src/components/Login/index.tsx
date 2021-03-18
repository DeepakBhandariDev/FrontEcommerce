/* import React from 'react';
import {Link} from 'react-router-dom';
import Cart from "../../svg/cart.svg"; */
//import { useSelector } from 'react-redux'
//import { AppState } from '../../types'
import React from "react";
import "./index.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/user";
import { AppState } from "../../types";
import { userToken } from '../../redux/actions/user'

export default function Header() {
  //const cartValue = useSelector((state: AppState) => state.cart.cartCountries.length)

  const dispatch = useDispatch();
  const responseSuccessGoogle = (response: any) => {
    dispatch(userToken(response))
  };

  const logout = (response: any) => {};

  const responseErrorGoogle = (response: any) => {
    console.log(response.error);
  };
  const user = useSelector((state: AppState) => state.user.user);

  return (
    <div className="login">
      <h1>Google login</h1>
      <br />
      <h2>Hi {user.name}.</h2>
      <img src={user.imageUrl}></img>
      <GoogleLogin
        clientId="701388926312-pd0te09anv6p15h6q8soj9uk9h7tb1e0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
