import React from 'react'
import './HeroSection.css'
import { Button } from '../Button';
import { Link } from 'react-router-dom';
function HeroSection({lightbg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img,alt,imgStart}) {
    return (
        <>
<div className={lightbg? 'home__hero-section':'home__hero-section darkbg'}>
<div className='container'>
    <div className='row home__hero-row'
    style={{display:'flex',
flexDirection:imgStart==='start'?'row-reverse':'row'    
    }}>
<div className='col'>
    <div className='home__hero-text-warpper'>
<div className='top-line'>{topLine}</div>
<h1 className={lightText? 'heading': 'heading dark'}>{headLine}</h1>
<p className={lightTextDesc? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
<Link to='/sign-up'>
    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
</Link>

    </div>
</div>
<div className='col'>
    <div className='home__hero-img-wraper'>
        <img className='home__hero-img' src={img} alt={alt} />
    </div>
</div>
    </div>
</div>
</div>
        
        </>
    )
}

export default HeroSection
