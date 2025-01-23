import React from 'react'

export default function Projects(props) {
  return (
    <div className='width-content margin-bottom'>
        <div className='width-content border-10 cursor-pointer primary-flex padding-sml size-project'>
          <div className='float-left'>
            <img src={props.img} alt='' className='link-img'></img>
          </div>
          <div className='float-left width-65 primary-flex flex-col justify-center'>
            <a href={props.pointer}><h3 className='whiten font-poppins spacing-l-sml'>{props.projectName}</h3></a>
            <h6 className='whiten font-poppins spacing-l-sml'>{props.desc}</h6>
            <h6 className='whiten font-poppins spacing-l-sml'>{props.desc2}</h6>
          </div>
          <div className='float-left width-10 primary-flex flex-col whiten'>
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
        </div>
    </div>
  )
}
