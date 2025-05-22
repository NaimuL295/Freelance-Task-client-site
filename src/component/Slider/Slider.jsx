import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {


 const [dataUl,setData] = useState([]);


    useEffect(()=>{
    const fetchData = async () => {
      
       const response = await fetch("https://assignment-10-server-side-blond.vercel.app/slider");
      
        const data = await response.json();
      setData(data)
   } 
   fetchData() 
    },[]);
  // console.log(dataUl);
    const descriptionArray = dataUl.description?.split(' ') || ['No text found'];
console.log(descriptionArray);

    return (
        <div>
         
    <div className="relative px-4 sm:px-6 lg:px-8">
<Swiper
  pagination={{ 
    clickable: true,
    dynamicBullets: true,
    renderBullet: (index, className) => {
      return `<span class="${className} bg-white opacity-80 hover:opacity-100 transition-opacity duration-300"></span>`;
    }
  }}
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full rounded-xl sm:rounded-2xl shadow-lg"
  autoplay={{
    delay: 10000,
    disableOnInteraction: false,
  }}
>
  {dataUl.map((ui, index) => {
    const descriptionArray = ui.description ? ui.description.split(' ,') : ['No text found'];

    return (
      <SwiperSlide key={index}>
        <div className="relative h-full w-full flex justify-center items-center">
          <div className="absolute inset-0">
            <img 
              className="w-full h-full object-cover"
              src={ui.image} 
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>

          <div className="z-10 relative container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                <Typewriter
                  words={descriptionArray}
                  loop={true}
                  cursor
                  // typeSpeed={70}
                  // deleteSpeed={50}
                  // delaySpeed={1000}
                />
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6">
                {ui.description} 
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-sm sm:text-base font-medium transition-colors duration-300 shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>

  </div>
 
        </div>
    );
};

export default Slider;





