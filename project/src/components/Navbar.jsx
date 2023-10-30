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
import modal from '../assets/modal.svg'
import mobileProfile from '../assets/mobileProfile.svg'
import NavbarComponent from './NavbarComponent'
import Modal from 'react-modal';
import general from '../assets/general.svg'
import security from '../assets/security.svg'
import billing from '../assets/billing.svg'
import notification from '../assets/notification.svg'
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'



export default function Navbar({ isOpen }) {
  const { path, url } = useRouteMatch()
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "transparent",
      zIndex: '999',
    },
    content: {
      position: "absolute",
      zIndex: "9999",
      right: '0',
      left: '0',
      bottom: '0',
      width: '100%',
      height: '90vh',
      backgroundColor: "white",
      top: 'auto',
      boxShadow: '0px -15px 5px 0px rgba(153, 155, 168, 0.15)',
      borderRadius: "2px 12px 0px 0px",
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '0px',
      paddingTop: '57px',
      paddingBottom: "32px"
      // transition: "height 0.3s",



    },
  };

  Modal.setAppElement('#root');
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }





  return (
    <div className={`navbar ${isOpen ? 'navbarLong' : 'navbarShort'}`} >

      <img src={isOpen ? long : short} />
      <div className='navbarText' >
        <NavLink to={`${url}/home`} activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={home} text={'Dashboard'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/messenger`} activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'> <NavbarComponent src={message} text={'Messanger'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/calls`} activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={calls} text={'Calls'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/conference`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={conference} text={'Conference'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/contacts`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={contact} text={'Contacts'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/screenshare`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={screen} text={'Screenshare'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/schedule`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={schedule} text={'Schedule'} isOpen={isOpen} /></NavLink>
        <NavLink to={`${url}/settings`} exact activeClassName={isOpen ? 'active-class' : 'active-class-closed'} className='navlink'><NavbarComponent src={setting} text={'Settings'} isOpen={isOpen} /></NavLink>
        <button onClick={openModal} ><img src={modal} alt="description" /></button>
      </div>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >

        <div className='mobileNavbar'>
          <img src={mobileProfile} alt="description" />
          <div>
            <span>Johanna Stevens</span>
            <span>UI/UX Designer</span>
          </div>
        </div>


        <div className='mobileNavFirst'>
          <span>Navigation</span>
          <div>
            <NavLink to={`${url}/home`} activeClassName="blackActive" ><img src={home} alt="description" /><span>Dashboard</span></NavLink>
            <NavLink to={`${url}/messenger`} activeClassName="blackActive" ><img src={message} alt="description" /><span>Messenger</span></NavLink>
            <NavLink to={`${url}/calls`}  activeClassName="blackActive"><img src={calls} alt="description" /><span>Calls</span></NavLink>
            <NavLink to={`${url}/conference`} activeClassName="blackActive" exact ><img src={conference} alt="description" /><span>Conference</span></NavLink>
            <NavLink to={`${url}/contacts`} activeClassName="blackActive" exact ><img src={contact} alt="description" /><span>Contacts</span></NavLink>
            <NavLink to={`${url}/screenshare`} activeClassName="blackActive"  exact ><img src={screen} alt="description" /><span>Screenshare</span></NavLink>
            <NavLink to={`${url}/schedule`} activeClassName="blackActive" exact ><img src={schedule} alt="description" /><span>Schedule</span></NavLink>
            <NavLink to={`${url}/settings`}  activeClassName="blackActive" exact ><img src={setting} alt="description" /><span>Company Management</span></NavLink>
          </div>
        </div>

        <div className='mobileNavFirst' style={{marginTop:"25px"}}>
          <span>Settings</span>
          <div>
            <NavLink to={`${url}/settings/general`} activeClassName="blackActive" ><img src={general} alt="description" /><span>General information</span></NavLink>
            <NavLink to={`${url}/settings/security`} activeClassName="blackActive" ><img src={security} alt="description" /><span>Security</span></NavLink>
            <NavLink to={`${url}/settings/billing`}  activeClassName="blackActive"><img src={billing} alt="description" /><span>Billing</span></NavLink>
            <NavLink to={`${url}/seetings/notifications`} activeClassName="blackActive" exact ><img src={notification} alt="description" /><span>Notifications</span></NavLink>
          </div>
        </div>


      </Modal>







    </div>
  )
}
