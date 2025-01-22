import React from 'react'
import logo from "../Images/shaury.jpeg";
import AartiPage from "../Images/AartiPage.png";
export default function Image() {
  return (
    <div>
      <div className='left-info float-left width-40 primary-flex justify-end'>
        <div className='bg-white padding-main margin-top-extra border-10 primary-grid justify-center width-min'>
          <img src={logo} alt='' className='height-main border-10'></img>
          <h1 className='primary-flex justify-center font-poppins font-main margin-t-sml'><b>Shaury Singh</b></h1>
          <p className='text-center margin-t-sml font-poppins darken-mix'><b>A engineer who is capable of developing innovative solutions to knotty problems.</b></p>
        </div>
      </div>
      <div className='right-info float-left width-60'>
        <div className='primary-grid justify-center pos-rel info-div'>
          <h1 className='font-poppins whiten font-head font-spacing margin-top-extra primary-flex justify-start margin-left-extra'>SOFTWARE</h1>
          <h1 className='font-poppins font-head font-spacing primary-flex justify-start margin-left-extra transform-up darken'>ENGINEER</h1>
          <div className='primary-flex margin-left-extra'>
            <p className='third-font text-center width-500 font-poppins transform-up-max text-info'>Passionate about creating simple solution to complex problems combined with great user experience. Specialize in transforming ideas into beautifully crafted products.</p>
          </div>
        </div>
        <div className='primary-grid justify-center margin-left'>
          <div>
            <h1 className='font-poppins whiten font-head font-spacing margin-top-extra primary-flex justify-start'>Recent</h1>
            <h1 className='font-poppins font-head font-spacing primary-flex justify-start transform-up darken'>Projects</h1>
          </div>
          <div className='width-content'>
            <div className='width-content border-10 cursor-pointer primary-flex padding-sml size-project'>
              <div className='float-left width-25'>
                <img src={AartiPage} alt='' className='link-img'></img>
              </div>
              <div className='float-left width-65 primary-flex flex-col justify-center'>
                <h3 className='whiten font-poppins spacing-l-sml'>Maha Ganga Aarti Events</h3>
                <h6 className='whiten font-poppins spacing-l-sml'>Event Booking Website</h6>
              </div>
              <div className='float-left width-10 primary-flex flex-col whiten'>
                <ion-icon name="log-out-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
