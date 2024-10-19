import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../../Styles/HeroSlider.css"

 
 const HeroSlider = () => {

    const settings = {
        fade:true,
        speed: 5000,
        autoplaySpeed: 6000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slideToScroll: 1,
        pauseOnHover: false,

    }

return (
    <Slider{...settings} className='hero_slider'>
    <div className="slider_item slider_item-01 mt0">
        <Container>
            <div className="slider_content">
                
                <h4 className="text-light mb-4">Reserve Now and Get Our Service</h4>
                <h1 className="text-light mb-3">We Provide Our Service Better<br/> Per Day</h1>
                <button className="btn reserve_btn mt-4">
                    <Link to='/cars'>Reserve Now</Link> 
                </button>
            </div>
        </Container>
    </div>

    <div className="slider_item slider_item-02 mt0">
        <Container>
            <div className="slider_content">
               
                <h4 className="text-light mb-4">Reserve Now and Get Our Service</h4>
                <h1 className="text-light mb-3">We Provide Our Service Better<br/> Per Day</h1>
                <button className="btn reserve_btn  mt-4">
                    <Link to='/cars'>Reserve Now</Link> 
                </button>
                </div>                                                                                                                                                                                                                                                      
        </Container>
    </div>

<div className="slider_item slider_item-03 mt0">
<Container>
    <div className="slider_content">
        
        <h4 className="text-light mb-4">Reserve Now and Get Our Service</h4>
        <h1 className="text-light mb-3">We Provide Our Service Better<br/> Per Day</h1>
        <button className="btn reserve_btn mt-4">
            <Link to='/cars'>Reserve Now</Link> 
        </button>
        </div>                                                                                                                                                                                                                                                      
</Container>
</div>
  </Slider>
   );
 };
 
 export default HeroSlider
 