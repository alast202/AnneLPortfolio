import React from 'react'
import { Link } from 'react-router-dom';
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
          
        <div className='card'>
                <h3>- Email Template -</h3>
                <span className='bar'></span>
                <p className='btc'>£ 25</p>
                <p>- 1 Day -</p>
                <p>- Aligned with a brand -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p> 
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>- Landing Page -</h3>
                <span className='bar'></span>
                <p className='btc'>£ 50</p>
                <p>- 2 days -</p>
                <p>- 1 Page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>£ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

           
        </div>
    </div> 
    
    
  )
  
}


export default PricingCard