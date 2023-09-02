import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(){
    const [active,setActive]=useState(false);//to change the color of the navbar background on scroll up and down.
    const [open,setOpen]=useState(false);//to open the user's menu in the appplication

    const {pathname}=useLocation()

    const isActive=()=>{ //to check the status of the scrolling of navbar
        window.scrollY>0 ? setActive(true):setActive(false);
    }
    
    useEffect(()=>{ //adding eventListener to call the function when the navbar is scrolled so as to provide the changes in navbar
        window.addEventListener("scroll",isActive);
        return()=>{
            window.removeEventListener("scroll",isActive);
        };
    },[])

    const currentUser={ //to provide different interface to our  signed in users
        id:1,
        username:"gautam",
        isSeller:true

    }

    return (
        <div className={active || pathname!=="/"?"navbar active":"navbar"}>{/*if scrolled up then classname= navbar active and if scrolled down classname=navbar */}
            <div className='container'>
            <div className='logo'>
            <Link to="/" className='links'>
                <span className='text'>fiverr</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                { !currentUser?.isSeller && <span>Become a seller</span>} {/*checking whether the user is already a seller if yes then we won't show this link to the user who is already a seller*/ }
                {!currentUser && <button>Join me</button>}

                {currentUser && (
                    <div className='user' onClick={()=>setOpen(!open)}> {/* when it is open the user's menu will appear and when clicked again it will set the value of open (false) and on again click it will set the value to true */}
                    <img src="../images/man.png" alt="user1"/> 
                    <span>{currentUser?.username} </span> 
                   
                  { open &&  <div className='options'> {/* if the open is true only then this part will be displayed on user site */}
                      {//IF currentuser is a seller than show this as menu
                        currentUser?.isSeller&&(
                            <>
                                <Link className='links' to='/mygigs'>gigs</Link>
                                <Link className='links' to='/add'>Add new gig</Link>
                            </>
                        )
                      }
                      <Link className='links' to='/orders'>Orders</Link>
                      <Link className='links' to='/messages'>Messages</Link>
                      <Link className='links' to='/'>LogOut</Link>
                      </div>}
                      </div>
                )}

            </div>

            </div>   
       { (active || pathname!=="/") && ( //to display the menu items when the navbar is scrolled down (neeche ko laana)
        <>   
         <hr/>
         <div className='menu'>
         <Link className='link_menuLink' to="/">Graphics & Design</Link>
         <Link className='link_menuLink' to="/">Writing & Translation </Link>
         <Link className='link_menuLink' to="/">AI services</Link>
         <Link className='link_menuLink' to="/">Videos & Animation</Link>
         <Link className='link_menuLink' to="/">Digital Marketing</Link>
         <Link className='link_menuLink' to="/">Music & Audio</Link>
         <Link className='link_menuLink' to="/">Programming & Tech</Link>
         </div>
         <hr/>
         </>
         )}
        </div>
    )
};