import React from 'react'
import logo from "../Images/shaury.jpeg";

export default function Image() {
  return (
    <div>
      <div className='float-left width-40 primary-flex justify-end'>
        <div className='bg-white padding-main margin-top-extra border-10 primary-grid justify-center width-min'>
          <img src={logo} alt='' className='height-main border-10'></img>
          <h1 className='primary-flex justify-center font-poppins font-main margin-t-sml'><b>Shaury Singh</b></h1>
          <p className='text-center margin-t-sml font-poppins darken-mix'><b>A engineer who is capable of developing innovative solutions to knotty problems.</b></p>
        </div>
      </div>
      <div className='float-left width-60'>
        <div className='primary-grid justify-center pos-rel'>
          <h1 className='font-poppins whiten font-head font-spacing margin-top-extra primary-flex justify-start margin-left-extra'>SOFTWARE</h1>
          <h1 className='font-poppins font-head font-spacing primary-flex justify-start margin-left-extra transform-up darken'>ENGINEER</h1>
          <div className='primary-flex margin-left-extra'>
            <p className='third-font text-center width-500 font-poppins transform-up-max'>Passionate about creating simple solution to complex problems combined with great user experience. Specialize in transforming ideas into beautifully crafted products.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
