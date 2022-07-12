import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerInintiate } from "../redux/redusers/userReduser/userReducer";


function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRep, setPasswordRep] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordRep){
      return;
    }
    dispatch(registerInintiate(userName, email, password))
  }
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div><input type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)}/></div>
          <div><input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
          <div><input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
          <div><input type="text" placeholder="Password Repeat" value={passwordRep} onChange={(e) => setPasswordRep(e.target.value)}/></div>
          <input type='submit'/>
        </form>
      </div>
    );
  }
  
  export default RegisterPage;