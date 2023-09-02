import React from 'react'
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

export default function CategoryCard({item}){
    return (
        <Link to='/gigs?cat=design'>
        <div className="categorycard">
            <img src={item.img} alt="" />
            <span className='desc'>{item.desc}</span>
            <span className='title'>{item.title}</span>
        </div>
        </Link>
    )
}