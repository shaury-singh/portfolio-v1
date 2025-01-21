import React from 'react'
import logo from "../Images/shaury.jpeg";

export default function Image() {
  return (
    <div>
      <div className='float-left width-30 primary-flex justify-end'>
        <div className='bg-white padding-main margin-top border-10 primary-grid justify-center'>
          <img src={logo} alt='' className='height-main border-10'></img>
          <p className='primary-flex justify-center font-playfair font-main margin-t-sml'><b>SHAURY SINGH</b></p>
        </div>
      </div>
      <div className='float-left width-70'></div>
    </div>
  )
}
