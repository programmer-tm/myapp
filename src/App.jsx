import Chat from "./Chat";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Main from "./Main";
import Error404 from "./404";
import React from "react";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/About" element={<About />}></Route> 
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
  );
}

export default App;