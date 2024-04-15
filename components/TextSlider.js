// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';


const TextSlider = ({ texts }) => {
   const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false
    };

  return (
    <div className='w-[300px] md:w-[380px] lg:w-[480px] ' >
      <Slider {...settings} >
        {texts.map((text, index) => (
        
                <p key={index} className='lg:w-[480px] md:w-[380px] px-4 md:px-0 mt-6 text-sm lg:text-lg' >
                    {text}
                </p>
          
        ))}
      </Slider>
    </div>
  );
};

export default TextSlider;
