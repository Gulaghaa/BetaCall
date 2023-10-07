import React, { useState, useEffect } from 'react'
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
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchJsonData } from '../services/api'
import axios from 'axios'


export default function Home() {
    const { path, url } = useRouteMatch()
    const history = useHistory()
    const [jsonData, setJsonData] = useState([])
    const [userData, setUserData] = useState([])
    const [contactData, setContactData] = useState([])


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

    setTimeout(() => {
        console.log(jsonData)
    }, 5000)


    return (
        <div className="Dashboard">
            <div className="rightDashboard">
                <img src={Cta} alt="description" style={{ width: '100%' }} />
                <div className="rightBelowDashboard">
                    <div className="rightBelowDashboardleft ">
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
                                            <div style={{ display: 'flex', gap: '17px', width:"89%",  alignItems: "center" }} >
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
                            <div className='w-full flex flex-col mt-[22px]' style={{ border: "1px solid black" }}>
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
                            <div className='flex h-[166px] gap-[16px] overflow-x-auto scrollbar' style={{ border: "1px solid black", marginTop: "23px" }}>
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



            </div>
            <div className='leftDashboard w-[331px] pl-[1%] pr-[1%]'>
                <div className='flex flex-col mt-[30px]'>
                    <span className='font-lato text-[16px] not-italic font-bold leading-[24px]' style={{ color: "#1A1C1D", fontFeatureSettings: "'clig' off, 'liga' off" }}>Recent Contacts</span>
                    <span className='font-lato text-[12px] not-italic font-normal leading-[21px]' style={{ color: "#8083A3", fontFeatureSettings: "'clig' off, 'liga' off" }}>Your previous chats and calls</span>
                </div>
                <div className='flex flex-col gap-[11px] h-[700px] mt-[27px] overflow-scroll scrollbar' style={{ border: "1px solid black" }}>
                    {contactData != [] ?
                        contactData.map((e) => {
                            return (
                                <div className='flex justify-between' key={e.id}>
                                    <div className='flex gap-[18px] justify-center items-center h-[68px]' style={{ border: "1px solid black" }}>
                                        <div className='relative w-[38px] h-[38px]' style={{ backgroundImage: `url(${contactImage})`, backgroundRepeat: "no-repeat", border: "1px solid black" }}>
                                            <div className='absolute bottom-[-4px] right-[-4px] w-[12px] h-[12px] aspect-square rounded-full flex justify-center items-center' style={{ backgroundColor: "#FFFF" }}>
                                                <div className='w-[8px] h-[8px]  aspect-square rounded-full' style={{ backgroundColor: "#28C345 " }}></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-lato text-[16px] not-italic font-bold leading-[24px]' style={{ color: "#1A1C1D", fontFeatureSettings: "'clig' off, 'liga' off" }}>{e.fullName}</span>
                                            <span className='font-lato text-[14px] not-italic font-normal leading-[21px]' style={{ color: "#8083A3", fontFeatureSettings: "'clig' off, 'liga' off" }}>{e.position}</span>
                                        </div>
                                    </div>
                                    <img src={actions} alt="description" />
                                </div>
                            )
                        }) : null
                    }

                </div>


            </div>
        </div>
    )
}



