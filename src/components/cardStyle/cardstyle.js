import React from 'react'
import './cardstyle.css'
import Img from '../../assets/1576136631_1-org.jpg'
import { NavLink } from 'react-router-dom'

const cardstyle = () => {
  return (
    <div className='project-card'>
    <img src={Img} alt='img'/>
    <h2 className='project-title'>Project Title</h2>
    <div className='pro-deteails'>
      <p>This is text</p>
      <div className='pro-buttons'>
        <NavLink to="url.com" className="btn" >View</NavLink>
        <NavLink to="url.com" className="btn" >Src</NavLink>
      </div>
    </div>
    
</div>
  )
}

export default cardstyle