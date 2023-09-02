import React, { useState } from 'react'
import "./Gigs.scss";
import GigCard from '../../components/gigCard/GigCard';
import {gigs} from '../../Data.js';

export default function Gigs(){
    const [open,setOpen]=useState(false);
    const[sort,setSort]=useState("sales");


    const reSort=(type)=>{
        setSort(type)
        setOpen(false)
    }


    return (
        <div className='gigs'>
        <div className="container">
        <span className='breadcrumbs'>FIVERR > GRAPHICS & DESIGN ></span>
        <h1>AI Artists</h1>

        <p>
            Explore the boundaries of art and technology with Fiverr's AI Artists
        </p>

        <div className="menu">
            <div className="left">
                <span>budget</span>
                <input type="text" placeholder='min' />
                <input type="text" placeholder='max' />
                <button>Apply</button>
            </div>
            <div className="right">
                <span className='sortBy'>sortBy</span>
                <span className='sortType'>{sort==="sales"?"Best Selling":"Newest"}</span> {/*to change the heading of the sort By component if the user has selected sales then show best selling on the top else show newest*/}
                <img src="./images/down.png" alt="fg" onClick={()=>setOpen(!open)} />
               { open && (<div className="rightMenu">
                   {sort==="sales"? <span onClick={()=>reSort("CreatedAt")}>Newest</span>
                   : <span onClick={()=>reSort("sales")}>Best selling</span>}
                </div>
               )}
            </div>
        </div>

        <div className="cards">
            {gigs.map(gig=>{
                return <GigCard key={gig.id} item={gig}/>
            })}
        </div>
        </div>
        </div>
    )
}