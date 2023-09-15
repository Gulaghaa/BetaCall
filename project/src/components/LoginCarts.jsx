import React from 'react'

export default function ({text,src}) {
  return (
    <div className='LoginCarts'>
        <img src={src} />
        <div></div>
        <span>{text}</span>

    </div>
  )
}
