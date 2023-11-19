import React from "react";
import Navbar from "../components/Navbar";
import Home from '../components/Home';
import { useState, useEffect } from "react";
import {
  Redirect,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import navbar from "../assets/Menu.svg";
import navbarOpen from "../assets/onLight.svg";
import search from "../assets/Search.svg";
import img from "../assets/Img.svg";
import Lbutton from '../assets/LButton.svg'
import { IoIosArrowDropright } from "react-icons/io"
import Setting from "./Settings/Setting";
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { path, url } = useRouteMatch();
  const [openSearch, setOpenSearch] = useState(false);




  const updateNavbarState = () => {
    if (window.innerWidth < 790) {
      setIsOpen(false);
    }
  };

  

  useEffect(() => {
    updateNavbarState();
    const handleResize = () => {
      updateNavbarState();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="MainDivOfDashboard">
      <Navbar isOpen={isOpen} />

      <div className="RightPartofNavbar" >
        <div className="upperNavbar" >
          <div className="leftPart" >
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              src={isOpen ? navbarOpen : navbar}
              className="openNavbar"
            />
            <img src={Lbutton} alt="description" className='filterNavbar hidden' />

            <div className={`responsiveNavbar ${!isOpen ? "active-div" : "non-active-div"}`}>
              <NavLink to={`${url}/home`} activeClassName="activeElement" style={{ "--i": 8 }} exact >Dashboard <IoIosArrowDropright /> </NavLink>
              <NavLink to={`${url}/messenger`} activeClassName="activeElement" style={{ "--i": 7 }} exact >Messenger <IoIosArrowDropright /></NavLink>
              <NavLink to={`${url}/calls`} activeClassName="activeElement" style={{ "--i": 6 }} exact >Calls <IoIosArrowDropright /></NavLink>
              <NavLink to={`${url}/conference`} activeClassName="activeElement" style={{ "--i": 5 }} exact>Conference<IoIosArrowDropright /></NavLink>
              <NavLink to={`${url}/contacts`} activeClassName="activeElement" style={{ "--i": 4 }} exact >Contacts<IoIosArrowDropright /></NavLink>
              <NavLink to={`${url}/screenshare`} activeClassName="activeElement" style={{ "--i": 3 }} exact >Screenshare<IoIosArrowDropright /></NavLink>
              <NavLink to={`${url}/schedule`} activeClassName="activeElement" style={{ "--i": 2 }} exact>Schedule<IoIosArrowDropright /></NavLink>
              <NavLink to={`${url}/settings`} activeClassName="activeElement" style={{ "--i": 1 }} exact >Settings<IoIosArrowDropright /></NavLink>
            </div>

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

          <div className="middlePart hidden">
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
          <div className="rightPart" >
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
            <Setting />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
