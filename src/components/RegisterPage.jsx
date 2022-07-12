import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerInintiate } from "../redux/redusers/userReduser/userReducer";
//import { userSelector } from "../redux/redusers/userReduser/userSelector";

function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRep, setPasswordRep] = useState('');
  const dispatch = useDispatch;
  //const user = userSelector(userSelector);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordRep){
      return;
    }
    dispatch(registerInintiate(userName,email,password))
  }
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div><input type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)}/></div>
          <div><input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
          <div><input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
          <div><input type="text" placeholder="Password Repeat" value={passwordRep} onChange={(e) => setPasswordRep(e.target.value)}/></div>
          <button type="submit">Registration</button>
        </form>
      </div>
    );
  }
  
  export default RegisterPage;