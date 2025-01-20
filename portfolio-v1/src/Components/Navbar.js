import React from 'react'

export default function Navbar() {
  return (
    <div className='primary-flex justify-center margin-t-sml'>
      <div className='width-content padding-sml height-content bg-secondary-theme whiten border-10'>
        <ion-icon name="home-outline" size="small" className="spacing-r-sml"></ion-icon>
        <ion-icon name="hammer-outline" size="small" className="spacing-r-sml"></ion-icon>
        <ion-icon name="albums-outline" size="small" className="spacing-r-sml"></ion-icon>
        <ion-icon name="call-outline" size="small" className="spacing-r-sml"></ion-icon>
      </div>
    </div>
  )
}
