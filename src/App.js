import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import user from "./Majar/user";
import login from "./Majar/login";
import home from "./Majar/home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={login} />
      <Route path="/user" exact component={user} />
      <Route path="/home" exact component={home} />
    </BrowserRouter>
  );
}

export default App;
