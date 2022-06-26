import React from "react";
import { Link, Outlet } from "react-router-dom";

function Main() {
    return (
        <>
        <header>
            <Link to={"/"}>Home</Link>
            <Link to={"/Profile"}>Profile</Link>
            <Link to={"/Chat"}>Chat</Link>
            <Link to={"/about"}>About</Link>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            Footer 2022
        </footer>
        </>
    );
  }
  
  export default Main;