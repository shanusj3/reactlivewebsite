import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import React from 'react'

const footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 Housing Society.</p>
                            <p>kerala</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /></h4>
                        <p>9744675621</p>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /></h4>
                        <p>shanujosephsj3@gmail.com</p>
                    </div>
                </div>

                <div className='right'>
                    <h4>About Me</h4>
                    <p>
                        A passionate web developer with two years of experience handling several
                        creative design projects. I'm highly creative and competent web designer and always keep up
                        with the newest design.
                    </p>
                    <div className='social-container'>
                    <div className='social'>
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                    <div className='social'>
                        <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                    <div className='social'>
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer