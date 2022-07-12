import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInintiate } from "../redux/redusers/userReduser/userReducer";
import { userSelector } from "../redux/redusers/userReduser/userSelector";

function About() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const logout = () => {
    dispatch(logoutInintiate());
  }

  if (user){
    return (
      <div>
        <p><a href="/Profile/login">Login</a></p>
        <p><a href="/Profile/register">Register</a></p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <p><a href="/Profile/login">Login</a></p>
        <p><a href="/Profile/register">Register</a></p>
      </div>
    );
  }   
  }
  
  export default About;