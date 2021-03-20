import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import "./index.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const userState = useSelector((state: AppState) => state.user);
  const { user } = userState;

  return (
   <div className="profile-container">
   <div className="profile">
      <img src={user.imageUrl} />
      <h2>{user.name}.</h2>
      <h3>{user.email}</h3>
      {user.isAdmin ? (
        <h2>
          <Link to="/postProduct">Post Products</Link>
        </h2>
      ) : (
        <span>Welcome to Boujie Apparels</span>
      )}
    </div>

    <div className="orders">
        <h1><Link to="/orders">To orders</Link></h1>
    </div>
    </div>
  );
}
