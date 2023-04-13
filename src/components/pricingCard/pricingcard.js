import React from 'react'
import { Link } from 'react-router-dom'
import './pricingcard.css'

const pricingcard = () => {
    return (
        <div className='pricing'>-
            <div className='card-container'>
                <div className='card'>
                    <h3> Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$199</p>
                    <p>- 3 Days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>
                        PURCHASE
                    </Link>
                </div>
                <div className='card'>
                    <h3> Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$199</p>
                    <p>- 3 Days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>
                        PURCHASE
                    </Link>
                </div>
                <div className='card'>
                    <h3> Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$199</p>
                    <p>- 3 Days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>
                        PURCHASE
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default pricingcard