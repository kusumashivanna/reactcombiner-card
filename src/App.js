import React from "react";
import CardContainer from "./container/CardContainer";
import ProfileContainer from "./container/ProfileContainer";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={CardContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  );
}

export default App;
