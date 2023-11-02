import "./App.css";
import LoginContainer from "./components/LoginContainer.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import Recover from "./components/Recover";

function App() {
  const [routing, setRouting] = useState(false);

  function getStatus(e) {
    if (e == "finished") {
      setRouting(true);
    } else {
      setRouting(false);
    }
  }

  return (
    <Router basename="BetaCall">

      
        <div>
        <Switch>
          <Route exact path='/' >
            <LoginContainer getStatus={getStatus} routing={routing} />
            {routing ? (
              <div className="GoToHome">
                <NavLink to='/dashboard/home' exact>
                  <button
                    style={{ cursor: "pointer" }}
                    className="buttonInsideFinish" >
                    Go to Home
                  </button>
                </NavLink>
              </div>
            ) : null}
          </Route>
          <Route exact path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/sign-in/recover' >
            <Recover />
          </Route>
          </Switch>
        </div>
      
    </Router>
  );
}

export default App;
