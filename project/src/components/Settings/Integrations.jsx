import React, { useState } from 'react';
import trello from '../../assets/trello.svg';
import intercom from '../../assets/intercom.svg';
import jira from '../../assets/jira.svg';
import invision from '../../assets/invision.svg';
import gdocs from '../../assets/gdocs.svg';
import dropbox from '../../assets/dropbox.svg';
import producthunt from '../../assets/producthunt.svg';

const ToggleSwitch = ({ checked, onChange }) => {
    const handleToggle = () => {
        onChange(!checked);
    };

    return (
        <label className="toggle-container" style={{ marginTop: '12px' }}>
            <input
                type="checkbox"
                className="toggle-input"
                checked={checked}
                onChange={handleToggle}
            />
            <span className="toggle-slider"></span>
        </label>
    );
};

export default function Integrations() {
    const integrationData = [
        {
            image: dropbox,
            name: 'Dropbox',
            description: 'Bring faster teamwork and faster file synchronization',
        },
        {
            image: invision,
            name: 'Invision',
            description: 'Design better and faster',
        },
        {
            image: jira,
            name: 'Jira',
            description: 'Stay agile and increase productivity',
        },
        {
            image: intercom,
            name: 'Intercom',
            description: 'Communicate faster with clients',
        },
        {
            image: trello,
            name: 'Trello',
            description: 'Collaborate with your teammates faster',
        },
        {
            image: producthunt,
            name: 'Product Hunt',
            description: 'Get new product notifications right on your dashboard',
        },
        {
            image: gdocs,
            name: 'Google Docs',
            description: 'Connect all your documents in one place',
        },
    ];

    const [integrationStates, setIntegrationStates] = useState(
        integrationData.reduce((acc, e) => ({ ...acc, [e.name]: false }), {})
    );

    const handleToggle = (name) => {
        setIntegrationStates((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div style={{ padding: '34px 30px 0 33px', border: '1px solid black' }} className='Integrations'>
            <div>Integrations</div>
            <div className='appContainer flex flex-col gap-[20px] mt-[35px]'>
                {integrationData.map((e) => (
                    <div key={e.name} style={{ height: '62px', borderBottom: '1px solid var(--outline-eeeeee, #EEE)', display: 'flex', justifyContent: 'space-between' }}>
                        <div className='flex gap-[26px]'>
                            <img src={e.image} className='w-[36px] h-[36px] mt-[6px]' alt="description" />
                            <div className='flex flex-col IntegrationSpan' >
                                <span style={{ color: integrationStates[e.name] ? 'var(--1-a-1-c-1-d-primary, #1A1C1D)' : 'var(--8083-a-3, #8083A3)' }}>{e.name}</span>
                                <span>{e.description}</span>
                            </div>
                        </div>
                        <ToggleSwitch checked={integrationStates[e.name]} onChange={() => handleToggle(e.name)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
