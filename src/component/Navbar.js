import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import React,{useState,useEffect} from 'react'
import PetsIcon from '@material-ui/icons/Pets';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '../Button';
import {animateScroll as scroll} from 'react-scroll' 
import './Navbar.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { BorderColor } from '@material-ui/icons';
function Navbar() {

    const [scrlNav,setscrlNav]=useState(false);

const changeNav=()=>{
    if(window.scrollY>=80){
        setscrlNav(true)
    }else{
        setscrlNav(false);
    }
}
const gotop=()=>{
    scroll.scrollToTop();
}

    const location=useLocation();
 const [click,setclick]=useState(false)
const [button ,setButton]=useState(true);
const handleClick=()=>setclick(!click);
        <Button buttonStyle='btn--outline'>SIGN UP</Button>
        const closeMobileMenu=()=>setclick(false)
        const showButton=()=>{
            if(window.innerWidth<960){
                setButton(false)
            }else{
                setButton(true);
            }
        }
const [Location ,setlocation]=useState("");

     useEffect(() => {
            setlocation(location.pathname);
              
   showButton();
   window.addEventListener('scroll',changeNav);
});


window.addEventListener('resize',showButton);


    return (
        <>
         <div className='navbar' id='to'>
           <div className='navbar-container container'>
<Link className='navbar-logo' onClick={closeMobileMenu}>
    <PetsIcon className='navbar-icon'/>
    lavish
    <br/>
 
</Link>
<div className='menu-icon' onClick={handleClick}>
{!click?<MenuIcon/>:<CloseIcon/>}
</div>
<ul className={click? 'nav-menu active':'nav-menu'}>
<li className= {Location==='/'? 'nav-item h' : 'nav-item'}>
    <Link className='nav-links'    onClick={closeMobileMenu} to='/' >Home</Link>
</li>
<li className= {Location==='/services'? 'nav-item h' : 'nav-item'}>
    <Link className='nav-links '   to='/services'>Services</Link>
</li>
<li className= {Location==='/product'? 'nav-item h' : 'nav-item'}>
    <Link className='nav-links P'  to='/product' onClick={closeMobileMenu} >Product</Link>
</li>

<li className='nav-btn'>
{button ?(
    <Link className='btn-link' onClick={closeMobileMenu} to='/sign-up'>
        <Button buttonStyle='btn--outline'>SIGN UP</Button>
    </Link>
):
(
    <Link to='/sign-up' className='btn-link'>
        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
    </Link>
)
}
</li>

</ul>
           </div>
         </div>
         <div className={scrlNav? "top active": 'top dis'}>
         <Link  onClick={gotop}>
         <ArrowUpwardIcon  />
         
         </Link>
         </div>
        </>
    )
}

export default Navbar
