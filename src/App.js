import React from "react";
import Startseite from "./components/startseite/Startseite";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Startseite} />
          <Route path="/startseite" component={Startseite} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
