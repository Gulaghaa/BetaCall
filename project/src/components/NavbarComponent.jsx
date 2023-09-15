import React from 'react'

export default function NavbarComponent({ src , text , isOpen}) {
    return (
        <div className='navbarComponentLong' style={{paddingLeft : isOpen ? null : '0px', justifyContent: isOpen ? null : 'center'}}>
            <div className='imgDiv'>
                <img src={src} />
            </div>
            <span style={{display: isOpen ? 'flex' : 'none'}}>{text}</span>


        </div>
    )
}
