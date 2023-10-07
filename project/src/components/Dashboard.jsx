import React from "react";
import Navbar from "../components/Navbar";
import Home from '../components/Home';
import { useState } from "react";
import {
  Redirect,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import navbar from "../assets/Menu.svg";
import navbarOpen from "../assets/onLight.svg";
import search from "../assets/Search.svg";
import img from "../assets/Img.svg";
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { path, url } = useRouteMatch();
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="MainDivOfDashboard">
      <Navbar isOpen={isOpen} />

      <div className="RightPartofNavbar">
        <div className="upperNavbar">
          <div className="leftPart">
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              src={isOpen ? navbarOpen : navbar}
            />
            <Switch>
              <Redirect from={`${path}`} exact to={`${path}/home`} />
              <Route path={`${path}/home`}>
                <span>Dashboard</span>
              </Route>
              <Route path={`${path}/messenger`}>
                <span>Messenger</span>
              </Route>
              <Route path={`${path}/calls`}>
                <span>Calls</span>
              </Route>
              <Route path={`${path}/conference`}>
                <span>Conference</span>
              </Route>
              <Route path={`${path}/contacts`}>
                <span>Contacts</span>
              </Route>
              <Route path={`${path}/screenshare`}>
                <span>Screenshare</span>
              </Route>
              <Route path={`${path}/schedule`}>
                <span>Schedule</span>
              </Route>
              <Route path={`${path}/settings`}>
                <span>Settings</span>
              </Route>
            </Switch>
          </div>
          <div className="rightPart">
            <div className="search_area">
              <input
                type="search"
                placeholder="Search"
                id="search"
                className={openSearch ? "searchOpen" : "searchClosed"}
              />
              <label
                htmlFor="search"
                className={openSearch ? "searchLabelOpen" : "searchLabelClosed"}
                onClick={() => setOpenSearch((prev) => !prev)}
              >
                <img src={search} />
              </label>
            </div>
            <img src={img} />
          </div>
        </div>
        <Switch>
              <Route path={`${path}/home`}>
                <Home />
              </Route>
              <Route path={`${path}/messenger`}>
                <span>Messenger</span>
              </Route>
              <Route path={`${path}/calls`}>
                <span>Calls</span>
              </Route>
              <Route path={`${path}/conference`}>
                <span>Conference</span>
              </Route>
              <Route path={`${path}/contacts`}>
                <span>Contacts</span>
              </Route>
              <Route path={`${path}/screenshare`}>
                <span>Screenshare</span>
              </Route>
              <Route path={`${path}/schedule`}>
                <span>Schedule</span>
              </Route>
              <Route path={`${path}/settings`}>
                <span>Settings</span>
              </Route>
            </Switch>
      </div>
    </div>
  );
}
