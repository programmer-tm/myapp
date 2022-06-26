import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../redux/redusers/profileReducer/profileSelector";

function Profile() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();
    return (
      <div>
        <button onClick={()=>dispatch({type: 'minus'})}>-</button>
        {count}
        <button onClick={()=>dispatch({type: 'plus'})}>+</button>
      </div>
    );
  }
  
  export default Profile;