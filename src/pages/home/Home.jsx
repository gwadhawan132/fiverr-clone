import React from 'react'
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards,projects } from '../../Data';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

export default function Home(){
    return (
        <div className='home'>
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={3}>
            {cards.map((card)=>{
                   return <CategoryCard item={card} key={card.id}/>
                })}
            </Slide>
            <div className="features">
            <div className="container">
                <div className="item">

                <h1>A whole world of Freelance talent at your fingertips.</h1>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    <b>the best for every budget</b>
                </div>
                <p>find the high-quality services at every price point.no hourly
                rates,just project based pricing</p>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    <b>the best for every budget</b>
                </div>
                <p>find the high-quality services at every price point.no hourly
                rates,just project based pricing</p>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    <b>the best for every budget</b>
                </div>
                <p>find the high-quality services at every price point.no hourly
                rates,just project based pricing</p>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    <b> the best for every budget</b>
                </div>
                <p>find the high-quality services at every price point.no hourly
                rates,just project based pricing</p>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    <b>the best for every budget</b>
                </div>
                <p>find the high-quality services at every price point.no hourly
                rates,just project based pricing</p>
                


                </div>
                <div className="item">
                    <img src="./images/man.png" alt="video aani thi yaha"></img>
                </div>
                </div>
            </div>

                {/* for second component */}
                <div className="features dark">
            <div className="container">
                <div className="item">
                <h1>fiverrr business</h1>
                <h1> A business solution designed for teams</h1>
                <p>Upgrade to a curated experience packed with tools and 
                benifits dedicated to business</p>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    Connect to freelancer with proven business experience.
                </div>
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    Connect to freelancer with proven business experience.
                </div> <div className="title">
                    <img src="./images/check.png" alt="" />
                    Connect to freelancer with proven business experience.
                </div> 
                <div className="title">
                    <img src="./images/check.png" alt="" />
                    Connect to freelancer with proven business experience.
                </div>
                <button>Explore Fiverr Business</button>
                </div>
                <div className="item">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="video aani thi yaha"></img>
                </div>

                </div>
            </div> 

            {/* for second sliders */}
            <Slide slidesToShow={4} arrowsScroll={3}>
            {projects.map((project)=>{
                   return <ProjectCard item={project} key={project.id}/>
                })}
            </Slide>
           
        </div>
        )
}