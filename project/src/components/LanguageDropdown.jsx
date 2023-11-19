import React, { useEffect, useState } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";


const LanguageSwitcher = ({ changeLanguagetoAz, changeLanguagetoEng }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('langCode'));

    const languages = {
        az: {
            code: 'az',
            name: 'Azerbaijani',
            flagUrl: 'AZERBAIJAN_FLAG_URL',
        },
        gb: {
            code: 'gb',
            name: 'English',
            flagUrl: 'ENGLAND_FLAG_URL',
        },
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const switchLanguage = (langCode) => {
        setSelectedLanguage(langCode);
        localStorage.setItem('langCode', langCode)
        setIsDropdownOpen(false);
    };


    useEffect(() => {
        if (selectedLanguage == 'az') {
            changeLanguagetoAz();
        }
        else {
            changeLanguagetoEng();
        }
    }, [localStorage.getItem('langCode')])


    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button style={{
                width: '133px',
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: '5px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }} onClick={toggleDropdown}>
                <span className={`fi fi-${languages[selectedLanguage].code}`}></span>
                {/* <img src={languages[selectedLanguage].flagUrl} alt={languages[selectedLanguage].name} style={{ width: '20px', marginRight: '8px' }} /> */}
                {languages[selectedLanguage].name}
            </button>
            {isDropdownOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    background: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    display: 'block',
                    zIndex: '1000',
                }}>
                    {Object.values(languages).map((language) => (
                        <div key={language.code} style={{
                            padding: '5px 10px',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            gap: '10px'
                        }} onClick={() => switchLanguage(language.code)}>
                            <span className={`fi fi-${language.code}`}></span>
                            {language.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
