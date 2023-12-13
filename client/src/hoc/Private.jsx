import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = (Component) => {
  const AuthRoute = (props) => {
    // const auth = useSelector((state) => state.authReducer);
    // console.log(auth);
    // return auth?.token ? <Component {...props} /> : <Navigate to="/" />;
    const token = localStorage.getItem("token")
    console.log(token);
    return token ? <Component {...props} /> : <Navigate to="/" />
  };
  return AuthRoute;
};

export default Private;
