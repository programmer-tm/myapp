import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInintiate } from "../redux/redusers/userReduser/userReducer";
import { userSelector } from "../redux/redusers/userReduser/userSelector";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  useEffect(()=>{
    if (user){
      navigate('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password){
      return;
    }
    dispatch(loginInintiate(email, password))
  }
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div><input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
          <div><input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
          <input type='submit'/>
        </form>
      </div>
    );
  }
  
  export default LoginPage;