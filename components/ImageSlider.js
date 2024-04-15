// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';


const ImageSlider = ({ images }) => {
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
    <div className='w-[300px] md:w-[300px] lg:w-[400px] xl:w-[600px]' >
      <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className='drop-shadow-lg lg:w-[400px] lg:h-[261.43px] md:w-[300px] md:h-[196.07px] w-[290px] h-[189.54px] xl:w-[600px] xl:h-[375px]' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
