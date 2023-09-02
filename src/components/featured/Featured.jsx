import React from 'react'
import './Featured.scss';

export default function Featured(){
    return (
        <>
        <div className='featured'>
            <div className='container'>
                <div className='left'>
                <h1>Find the freeLance services for your business</h1>
                <div className='search'>
                    <div className="searchInput">
                        <img src="./images/search.png" alt=""/>
                        <input type='text' placeholder='Try  building mobil app'/>
                    
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <span>Popular : </span>
                    <button>Web Design</button>                   
                    <button>WrodPress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>                    
                </div>
                </div>
                <div className='right'>
                <img src="./images/Subject.png" alt="" />
                </div>
            </div>
        </div>
           </>
    )
}