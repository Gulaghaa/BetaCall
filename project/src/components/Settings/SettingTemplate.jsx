import React from 'react'
import mobileProfile from '../../assets/mobileProfile.svg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import uniqid from 'uniqid';



export default function SettingTemplate({ mapData }) {
    console.log(mapData)
    return (
        <div className='settingTemplate' style={{ marginBottom: "27px", paddingTop: "40px" }}>
            <div>
                <img src={mobileProfile} alt="description" className='w-[114px] h-[114px]' />
                <div>
                    <span className='templateName'>QulamHuseynmemmedov</span>
                    <span>This one is </span>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                {
                    mapData.map((event) => {
                        return (
                            <NavLink to={event.path} activeClassName='templateNavlink' key={uniqid()} className='templateOption relative w-[80%] flex justify-center items-center h-[100px] ' style={{ borderBottom: "1px solid #EEE" }}>
                                <div className='flex gap-[22px] pl-[5%] w-[110%] absolute h-[80%] items-center rounded-[6px]' style={{zIndex: "-1"}} >
                                    <img src={event.image} alt="description" />
                                    <div className='flex flex-col'>
                                        <span style={{ color: "black" }}>{event.name}</span>
                                        <span>{event.description}</span>
                                    </div>
                                </div>

                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}
