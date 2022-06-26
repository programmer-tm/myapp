import React from "react";
import { Link } from "react-router-dom";

function Error404() {
    return (
      <div>
        Page not found!
        <Link to={"/"}> Go to Home!</Link>
      </div>
    );
  }
  
  export default Error404;