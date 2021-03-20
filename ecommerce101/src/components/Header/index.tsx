import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../../svg/cart.svg";
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../types'
import "./index.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { userToken } from '../../redux/actions/user'
import ThemeContext, {themes} from '../../themeContext'

export default function Header() {
  const userState = useSelector((state: AppState) => state.user)
  const { user, isAuthenticated } = userState
  const cartValue = useSelector((state: AppState) => state.cart.cartProducts.length)


  const { theme, switchTheme } = useContext(ThemeContext)

  const style = { backgroundColor: theme.color}


  const dispatch = useDispatch();
  const responseSuccessGoogle = (response: any) => {
    dispatch(userToken(response))
  };

  const logout = (response: any) => {};

  const responseErrorGoogle = (response: any) => {
    console.log(response.error);
  };

  return (
   <div className="navbar" style={style}>
       <div className="title">
       <Link to="/"><h1>Boujie Apparels</h1></Link>
       </div>
       <div className="options">
       <div className="sel">
        <select 
            value={theme.color} 
            onChange={(e) => switchTheme(e.target.value)}>

            <option value={themes.blend.color}>Blend</option>
            <option value={themes.dark.color}>Dark</option>
            <option value={themes.light.color}>Light</option>
            <option value={themes.evening.color}>Evening</option>
           
        </select></div>
           <div className="dropdown">
           <button className="dropbtn">
           {!isAuthenticated ? 
            <GoogleLogin
            clientId="701388926312-pd0te09anv6p15h6q8soj9uk9h7tb1e0.apps.googleusercontent.com"
            render={renderProps => (
              <button  className="google" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
            )}
            buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
            /> : <span>{user.name.split(" ")[0]}</span> }
            </button>
            <div className="dropdown-content">
            <Link to="/profile">Profile</Link>
            <Link to="/orderStatus">Orders</Link>
            
            
           
           </div></div>
           <div className="cart">
           <span>{cartValue}</span>
            <Link to="/cart">
                <img src={Cart}/>
            </Link>

           </div>
       </div>
   </div>  
   
  );
}
