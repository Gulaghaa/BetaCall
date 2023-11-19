import React from 'react'
import {
    Redirect,
    useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import SettingTemplate from './SettingTemplate'
import setting_1 from '../../assets/setting_1.svg'
import setting_2 from '../../assets/setting_2.svg'
import setting_3 from '../../assets/setting_3.svg'
import setting_4 from '../../assets/setting_4.svg'
import content from '../../assets/content.svg'
import Company from './Company';

function Setting() {
    const { url, path } = useRouteMatch();
    console.log(url)
    
    const settingData = [
        {
            image: setting_1,
            name: "Company information",
            description: "Company photo, name & details",
            path: `${url}/company`
        },
        {
            image: setting_2,
            name: "Teams & Users",
            description: "Add new users and create teams",
            path: `${url}/users`
        },
        {
            image: setting_3,
            name: "Reports",
            description: "Usage and action reports",
            path: `${url}/reports`
        },
        {
            image: setting_4,
            name: "Integrations",
            description: "Setup app integrations",
            path: `${url}/integrations`
        }

    ]


    return (
        <div style={{ height: "100%", display: "flex" }}>
            <SettingTemplate mapData={settingData} />
            <div className='' style={{ border: "1px solid black", width: "100%" }}>
                <Switch>
                    <Route exact path={`${path}`}>
                        <div className='w-[100%]  flex pt-[178px] justify-center'>
                            <img src={content} className='w-[371px] h-[382px]' alt="description" />
                        </div>
                    </Route>
                    <Route path={`${path}/company`}>
                        <Company />
                    </Route>
                    <Route path={`${path}/reports`}>
                        <div>Reports</div>
                    </Route>
                    <Route path={`${path}/users`}>
                        <div>Users</div>
                    </Route>
                    <Route path={`${path}/integrations`}>
                        <div>integration</div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Setting