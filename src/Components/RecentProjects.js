import React from 'react'

export default function RecentProjects(props) {
  return (
    <div>
        <h1 className='font-poppins whiten font-head font-spacing margin-top-extra primary-flex justify-start'>{props.head1}</h1>
        <h1 className='font-poppins font-head font-spacing primary-flex justify-start transform-up darken'>{props.head2}</h1>
    </div>
  )
}
