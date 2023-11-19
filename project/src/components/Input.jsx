import React from 'react'

export default function Input({ src, text, property, placeholder, uniqId, values, onchange }) {
    return (
        <div className='SingUpCloseInput'>
            <label htmlFor={uniqId}>{text}</label>
            <div>
                <input type={property} id={uniqId} onChange={onchange} placeholder={placeholder} value={values} required />
                <img src={src} style={{
                    filter: values!==''
                        ? 'brightness(0) invert(10%) sepia(12%) saturate(5900%) hue-rotate(206deg) brightness(78%) contrast(86%)'
                        : null
                }} />
            </div>
        </div>
    )
}
