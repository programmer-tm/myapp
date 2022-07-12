import Chat from "./Chat";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Main from "./Main";
import Error404 from "./404";
import React from "react";
import Login from "./login";
import RegisterPage from "./RegisterPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/Profile" element={<About />}></Route>
          <Route path="/About" element={<Profile />}></Route>
          <Route path="/Profile/login" element={<Login />}></Route>
          <Route path="/Profile/register" element={<RegisterPage />}></Route>
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
  );
}

export default App;