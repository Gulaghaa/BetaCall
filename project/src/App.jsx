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
  const [selectLanguage, setSelectLanguage] = useState(true);

  const changeLanguagetoEng = () => {
    if (selectLanguage) {
      setSelectLanguage(false);
      localStorage.setItem("language", false);
    }
  };

  const changeLanguagetoAz = () => {
    if (!selectLanguage) {
      setSelectLanguage(true);
      localStorage.setItem("language", true);
    }
  };

  function getStatus(e) {
    if (e == "finished") {
      setRouting(true);
    } else {
      setRouting(false);
    }
  }

  console.log(selectLanguage);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginContainer
              getStatus={getStatus}
              routing={routing}
              changeLanguagetoAz={changeLanguagetoAz}
              changeLanguagetoEng={changeLanguagetoEng}
              selectLanguage={selectLanguage}
            />
            {routing ? (
              <div className="GoToHome">
                <NavLink to="/dashboard/home" exact>
                  <button
                    style={{ cursor: "pointer" }}
                    className="buttonInsideFinish"
                  >
                    {selectLanguage ? "Əsas səhifəyə gedin" : "Go to Home"}
                  </button>
                </NavLink>
              </div>
            ) : null}
          </Route>
          <Route exact path="/sign-in">
            <SignIn
              changeLanguagetoAz={changeLanguagetoAz}
              changeLanguagetoEng={changeLanguagetoEng}
              selectLanguage={selectLanguage}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/sign-in/recover">
            <Recover
              selectLanguage={selectLanguage}
              changeLanguagetoAz={changeLanguagetoAz}
              changeLanguagetoEng={changeLanguagetoEng}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
