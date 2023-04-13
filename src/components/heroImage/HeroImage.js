import './HeroImage.css'
import React from 'react'
import IntroImg from '../../../src/assets/portfolio.jpeg'
import { Link } from 'react-router-dom'

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={IntroImg} alt='IntoImg' />
            </div>
            <div className='content'>
                <p>HI, IM SHANU JOSEPH</p>
                <h1>React Developer</h1>
                <div>
                     <Link to={"/project"} className='btn'>Projects</Link>
                     <Link to={"/contact"} className='btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage