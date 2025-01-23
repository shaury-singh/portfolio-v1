import React from 'react'

export default function Leftinfo(props) {
  return (
    <div className='width-100 justify-center primary-flex'>
      <div className='bg-white padding-main margin-top-extra border-10 primary-grid justify-center width-min'>
        <img src={props.logo} alt='' className='height-main border-10'></img>
        <h1 className='primary-flex justify-center font-poppins font-main margin-t-sml'><b>{props.name}</b></h1>
        <p className='text-center margin-t-sml font-poppins darken-mix'><b>{props.desc}</b></p>
      </div>
    </div>
  )
}
