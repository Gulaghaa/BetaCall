import React, { useState, useEffect, useRef } from 'react'
import Cta from '../assets/Cta.svg'
import Ico from '../assets/Ico.svg'
import Chat from '../assets/Chat.svg'
import user from '../assets/user1.svg'
import ico_1 from '../assets/ico_1.svg'
import ico_2 from '../assets/ico_2.svg'
import ico_3 from '../assets/ico_3.svg'
import ico_4 from '../assets/ico_4.svg'
import report from '../assets/report.svg'
import userImage from '../assets/userImage.svg'
import userImage1 from '../assets/userImage1.svg'
import userImage2 from '../assets/userImage2.svg'
import userImage3 from '../assets/userImage3.svg'
import userImage4 from '../assets/userImage4.svg'
import contactImage from '../assets/contact.svg'
import actions from '../assets/Actions.svg'
import mobileCTA from '../assets/mobileCta.svg'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchJsonData } from '../services/api'
import { BsFillTelephoneFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdOutlineInsertInvitation } from 'react-icons/md'
import axios from 'axios'



function UserOptions({ fullname }) {
    const [option, setOption] = useState(false);
    const userOptionsRef = useRef(null);


    const toggleOptions = () => {
        setOption((prev) => !prev);
        console.log(option)
    };

    const handleClickOutside = (e) => {
        if (userOptionsRef.current && !userOptionsRef.current.contains(e.target)) {
            setOption(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='option' ref={userOptionsRef}>
            <img src={actions} onClick={toggleOptions} alt="description" />
            {option ?
                <div className='absolute w-[120px] pl-[3px] pr-[3px] h-[100px] bottom-[-70px] left-[-120px] rounded-[10px] flex flex-col items-start justify-center gap-[5px]' style={{ border: "1px solid #ECEEF5", backgroundColor: "white" }}>
                    <button onClick={() => console.log('Call')}>Call to {fullname.split(' ')[0]}</button>
                    <button onClick={() => console.log('Message')}>Message</button>
                    <button onClick={() => console.log('Send Invitation')}>Send Invitation</button>
                </div>
                : null}
        </div>
    );
}



function SmallOptions() {

    return (
        <div className='shortOption'>
            <BsFillTelephoneFill color="green" />
            <BsFillChatLeftTextFill color='green' />
            <MdOutlineInsertInvitation color='green' />
        </div>
    )

}

export default function Home() {
    const { path, url } = useRouteMatch()
    const history = useHistory()
    const [jsonData, setJsonData] = useState([])
    const [userData, setUserData] = useState([])
    const [contactData, setContactData] = useState([])
    const [showMeetings, setShowMeetings] = useState(true);
    const [showContacts, setShowContacts] = useState(true);
    

    



    useEffect(() => {
        if (window.innerWidth <= 710 && location.pathname === '/dashboard/home') {
            setShowMeetings(true);
            setShowContacts(false);
        }
    }, [location.pathname]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 710) {
                if (showMeetings) {
                    setShowContacts(false);
                    setShowMeetings(true);
                }
                else {
                    setShowContacts(true);
                    setShowMeetings(false);
                }

            } else {
                setShowContacts(true);
                setShowMeetings(true);
            }



        };
        window.addEventListener('resize', handleResize);
        // window.addEventListener('load', handleResize);
        // history.listen((location, action) => {
        //     if(location.pathname == '/dashboard/home'){
        //         setShowContacts(true)
        //         setShowMeetings(false)
        //         console.log(`showMeeting ${showMeetings} , showContacts ${showContacts}`)
        //     }
        // });


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showContacts, showMeetings]);


    useEffect(() => {
        fetchJsonData("http://localhost:3003/meetings")
            .then((data) => {
                setJsonData(data);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });
        fetchJsonData("http://localhost:3003/users")
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            })
        fetchJsonData("http://localhost:3003/contacts")
            .then((data) => {
                setContactData(data);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            })
    }, [])
    console.log(jsonData)
    console.log(userData)
    console.log(contactData)

    const handleViewScheduleClick = () => {
        history.push('/dashboard/schedule');
    };
    const handleViewCallClick = () => {
        history.push('/dashboard/calls');
    }
    const handleVievContactClick = () => {
        history.push('/dashboard/contacts')
    }
    const handleVievMessageClick = () => {
        history.push('/dashboard/messenger')
    }
    const handleVievScreenShareClick = () => {
        history.push('/dashboard/screenshare')
    }

    return (
        <div className="Dashboard">
            <div className="rightDashboard">
                <img src={Cta} alt="description" style={{ width: '100%' }} />
                <img src={mobileCTA} alt="description" style={{ display: "none" }} />
                <div className='hidden buttons'>
                    <button className={showMeetings ? 'activeButton' : ''} onClick={() => {
                        // localStorage.setItem('showMeetings', showMeetings);
                        window.innerWidth <= 710 ? (setShowMeetings(true), setShowContacts(false)) : null

                    }}>Upcoming events</button>
                    <button className={showContacts ? 'activeButton' : ''} onClick={() => {
                        // localStorage.setItem('showContacts', showContacts);
                        window.innerWidth <= 710 ? (setShowMeetings(false), setShowContacts(true)) : null

                    }}>Recent contacts</button>
                </div>
                {showMeetings && (
                    <div className="rightBelowDashboard">

                        <div className='rightBelowDashboardleft ' >
                            <div style={{ marginTop: "22px" }}>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='event'>
                                    <span>Upcoming events</span>
                                    <div>
                                        <img src={Ico} alt="description" />
                                        <NavLink to='/dashboard/schedule' className='navlink' onClick={handleViewScheduleClick}>View Schedule</NavLink>
                                    </div>
                                </div>
                                <span>Scheduled meetings and calls</span>
                            </div>
                            <div className='overflow-y-auto max-h-[476px] min-h-0 scrollbar'  >


                                {jsonData != [] ?
                                    jsonData.map((e) => {
                                        return (
                                            <div className='renderEvent flex items-center justify-between' key={e.id} >
                                                <div style={{ display: 'flex', gap: '17px', width: "89%", alignItems: "center" }} >
                                                    <img src={Chat} alt="description" />
                                                    <div style={{ display: "flex", flexDirection: 'column' }}>
                                                        <span style={{
                                                            color: 'var(--1-a-1-c-1-d-primary, #1A1C1D)',
                                                            fontFeatureSettings: "'clig' off, 'liga' off",
                                                            fontFamily: 'Lato',
                                                            fontSize: '14px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 700,
                                                            lineHeight: '21px',
                                                        }}>{e.startingTime}</span>
                                                        <span style={{
                                                            color: 'var(--8083-a-3, #8083A3)',
                                                            fontFeatureSettings: "'clig' off, 'liga' off",
                                                            fontFamily: 'Lato',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 400,
                                                            lineHeight: '18px',
                                                        }}>{e.endingTime}</span>
                                                    </div>
                                                    <div className='flex flex-col ml-[10px] w-[272px]' >
                                                        <span className='font-lato text-[14px] not-italic font-normal leading-[21px] text-grey-900' style={{ fontFeatureSettings: "'clig' off, 'liga' off" }} >{e.topic}</span>
                                                        <span className='font-lato text-[12px] not-italic font-normal leading-[18px]' style={{ color: "#8083A3" }} >{e.member}</span>
                                                    </div>
                                                </div>
                                                <div className='w-[38px] h-[38px] aspect-square rounded-[10px]'>
                                                    <img src={user} alt='description' />
                                                </div>

                                            </div>)
                                    }) : null
                                }



                            </div>

                        </div>




                        <div className="rightBelowDashboardright flex flex-col gap-[32px]">
                            <div className='w-full h-full rounded-[8px]'>
                                <div className='w-full flex flex-col mt-[22px]' >
                                    <span className='font-lato text-[16px] not-italic font-bold leading-[24px]' style={{ color: "#1A1C1D", fontFeatureSettings: "'clig' off, 'liga' off" }}>Quick actions</span>
                                    <span className='font-lato text-[14px] not-italic font-normal leading-[21px]' style={{ color: "#8083A3", fontFeatureSettings: "'clig' off, 'liga' off" }}>Plan a meeting or start a call</span>
                                </div>
                                <div className='flex flex-wrap gap-[14px] justify-between mt-[18px] wrapContainer'>
                                    <div className='wrapContent' onClick={handleViewCallClick}>
                                        <img src={ico_1} alt="description" />
                                        <span>Start conference call</span>
                                    </div>
                                    <div className='wrapContent' onClick={handleVievContactClick}>
                                        <img src={ico_2} alt="description" />
                                        <span>Add new contact</span>
                                    </div>
                                    <div className='wrapContent' onClick={handleVievMessageClick}>
                                        <img src={ico_3} alt="description" />
                                        <span>Send private message</span>
                                    </div>
                                    <div className='wrapContent' onClick={handleVievScreenShareClick}>
                                        <img src={ico_4} alt="description" />
                                        <span>Launch screenshare</span>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full h-full rounded-[8px]'>
                                <div style={{ marginTop: "22px" }}>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='event'>
                                        <span>Top Users</span>
                                        <div>
                                            <img src={report} alt="description" />
                                            <NavLink to='/dashboard/schedule' className='navlink' onClick={handleViewScheduleClick}>All reports</NavLink>
                                        </div>
                                    </div>
                                    <span>Week to week performance</span>
                                </div>
                                <div className='flex h-[166px] gap-[16px] overflow-x-auto scrollbar' style={{ marginTop: "23px" }}>
                                    {userData != [] ?
                                        userData.map((e) => {
                                            return (
                                                <div className=' flex flex-col gap-[18px] basis-[26px] shrink-0 ' key={e.id} >
                                                    <div className='h-[120px] flex gap-[4px] justify-center items-end'>
                                                        <div className='w-[3px] rounded-[1.5px]' style={{ backgroundColor: "#6B59CC", height: `${e.activeIndex * 10}px` }}></div>
                                                        <div className='w-[3px] rounded-[1.5px]' style={{ backgroundColor: "#ECEEF5", height: `${e.passiveIndex * 10}px` }}></div>
                                                    </div>
                                                    <img src={userImage2} alt="description" className='aspect-square' />
                                                </div>
                                            )
                                        }) : null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                )}



            </div>
        

            {showContacts && (
                <div className='leftDashboard w-[331px] pl-[1%] pr-[1%]' >
                    <div className='flex flex-col mt-[30px]'>
                        <span className='font-lato text-[16px] not-italic font-bold leading-[24px]' style={{ color: "#1A1C1D", fontFeatureSettings: "'clig' off, 'liga' off" }}>Recent Contacts</span>
                        <span className='font-lato text-[12px] not-italic font-normal leading-[21px]' style={{ color: "#8083A3", fontFeatureSettings: "'clig' off, 'liga' off" }}>Your previous chats and calls</span>
                    </div>
                    <div className={`flex flex-col gap-[11px] h-[700px] mt-[27px] overflow-scroll scrollbar ${window.innerWidth > 710 ? 'responsiveDesignContact' : 'full'} `} >
                        {contactData != [] ?
                            contactData.map((e) => {
                                return (
                                    <div className={`flex justify-between ${window.innerWidth > 710 ? 'responsiveContactCard' : ''} `} key={e.id}>
                                        <div className={`flex gap-[18px] justify-center items-center h-[68px] ${window.innerWidth > 710 ? 'responsivePart' : ''}`} >
                                            <div className='relative w-[38px] h-[38px]' style={{ backgroundImage: `url(${contactImage})`, backgroundRepeat: "no-repeat"}}>
                                                <div className='absolute bottom-[-4px] right-[-4px] w-[12px] h-[12px] aspect-square rounded-full flex justify-center items-center' style={{ backgroundColor: "#FFFF" }}>
                                                    <div className='w-[8px] h-[8px]  aspect-square rounded-full' style={{ backgroundColor: "#28C345 " }}></div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-lato text-[16px] not-italic font-bold leading-[24px]' style={{ color: "#1A1C1D", fontFeatureSettings: "'clig' off, 'liga' off" }}>{e.fullName}</span>
                                                <span className='font-lato text-[14px] not-italic font-normal leading-[21px]' style={{ color: "#8083A3", fontFeatureSettings: "'clig' off, 'liga' off" }}>{window.innerWidth > 710 ? e.position : e.phoneNumber}</span>
                                            </div>
                                            <SmallOptions />
                                        </div>
                                        <UserOptions fullname={e.fullName} />
                                        <button style={{ display: 'none' }} className='contactButton'>Business</button>



                                    </div>
                                )
                            }) : null
                        }

                    </div>


                </div>
            )}


        </div>
    )
}



