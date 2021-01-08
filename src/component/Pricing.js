import { Link } from 'react-router-dom'
import React from 'react'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { Button } from '../Button';
import './Pricing.css';


function Pricing() {
    return (
        <>
        
        <div className='pricing__section'>
            <div className='pricing__wrapper'>
                <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__container'>
                <Link to='/sign-up' className='pricing__container-card'>
                    <div className='pricing__container-cardinfo'>
                        <div className='icon'>
                        <WhatshotIcon />
                        </div>
                        <h3>Starter</h3>
                        <h4>$8.99</h4>
                        <p>per month</p>
                        <ul className='pricing__container-features'>
                        <li>100 transations</li>
                        <li>2% cash basck</li>
                        <li>$10,000 limit</li>
                         </ul>
                         <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>

                    </div>
                </Link>
                <Link to='/sign-up' className='pricing__container-card'>
                    <div className='pricing__container-cardinfo'>
                        <div className='icon'>
                        <ThumbsUpDownIcon />
                        </div>
                        <h3>Gold</h3>
                        <h4>$29.99</h4>
                        <p>per month</p>
                        <ul className='pricing__container-features'>
                        <li>1000 transations</li>
                        <li>2.5% cash basck</li>
                        <li>$100,000 limit</li>
                         </ul>
                         <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plan</Button>

                    </div>
                </Link>
                <Link to='/sign-up' className='pricing__container-card'>
                    <div className='pricing__container-cardinfo'>
                        <div className='icon'>
                        <WbSunnyIcon />
                        </div>
                        <h3>Diamond</h3>
                        <h4>$99.99</h4>
                        <p>per month</p>
                        <ul className='pricing__container-features'>
                        <li>Unlimited transations</li>
                        <li>5% cash basck</li>
                        <li>Unlimit Spending</li>
                         </ul>
                         <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>

                    </div>
                </Link>

            </div>
            </div>
        </div>
        
        </>
    )
}

export default Pricing
