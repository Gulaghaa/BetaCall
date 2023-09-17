import React, { useState, useEffect } from 'react'
import Cta from '../assets/Cta.svg'
import Ico from '../assets/Ico.svg'
import Chat from '../assets/Chat.svg'
import user from '../assets/user1.svg'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchJsonData } from '../services/api'
import axios from 'axios'


export default function Home() {
    const { path, url } = useRouteMatch()
    const history = useHistory()
    const [jsonData, setJsonData] = useState([])


    useEffect(() => {
        fetchJsonData("http://localhost:3003/meetings")
            .then((data) => {
                setJsonData(data);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });
    }, [])

    const handleViewScheduleClick = () => {
        history.push('/dashboard/schedule');
    };

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
                        <div style={{ width: '100%', display: 'flex',  flexDirection: 'column', border:"1px solid green" }} className='h-[406px] overflow-scroll whitespace-nowrapf' >


                            { jsonData!=[] ? 
                                jsonData.map((e) => {
                                    return(
                                    <div className='renderEvent flex items-center justify-between'  key={e.id} >
                                        <div style={{ display: 'flex', gap: '17px' }}>
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
                                        <div className='w-[38px] h-[38px] rounded-[10px]' style={{ border: '1px solid red' }}>
                                            <img src={user} alt='description' />
                                        </div>

                                    </div>)
                                }):null
                            }



                        </div>

                    </div>
                    <div className="rightBelowDashboardright"></div>
                </div>



            </div>
            <div className='leftDashboard'>

            </div>
        </div>
    )
}
