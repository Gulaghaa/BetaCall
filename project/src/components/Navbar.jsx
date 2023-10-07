import React from 'react'
import long from '../assets/Logo.svg'
import short from '../assets/Solo.svg'
import home from '../assets/home.svg'
import message from '../assets/message.svg'
import calls from '../assets/calls.svg'
import conference from '../assets/Conference.svg'
import contact from '../assets/contacts.svg'
import screen from '../assets/screenshare.svg'
import schedule from '../assets/Schedule.svg'
import setting from '../assets/setting.svg'
import NavbarComponent from './NavbarComponent'
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'



export default function Navbar({ isOpen  }) {
  const { path, url } = useRouteMatch()
  return (
    <div className={`navbar ${isOpen ? 'navbarLong' : 'navbarShort'}`}>

      <img src={isOpen ? long : short} />
      <div className='navbarText'>
        <NavLink to={`${url}/home`} activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={home} text={'Dashboard'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/messenger`} activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'> <NavbarComponent src={message} text={'Messanger'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/calls`} activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={calls} text={'Calls'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/conference`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={conference} text={'Conference'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/contacts`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={contact} text={'Contacts'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/screenshare`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={screen} text={'Screenshare'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/schedule`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={schedule} text={'Schedule'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/settings`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={setting} text={'Settings'} isOpen={isOpen} /></NavLink>

      </div>







    </div>
  )
}
