//command to add react-carousel library used for making the slider
//npm install --save react-carousel --force

import './Slide.scss';
import  {Slider}  from 'infinite-react-carousel';//Slider has to be a named import from react carousel

export default function Slide({children,slidesToShow,arrowsScroll}){
    return(
        <div className="slide">
            <div className="container">
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>{/*to show 5 images on slider and on clickiing the arrow 5 slides will be moved  */}
               {children}
            </Slider>
                 
            </div>
        </div>
    )
}