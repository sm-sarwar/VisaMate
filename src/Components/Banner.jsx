import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg' 
import slider3 from '../assets/slider3.jpg' 

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-10">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider2}
              alt="Slide 1"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-[#00BFFF]">Welcome to VisaMate</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg">Your trusted partner for visa applications and updates.</p>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg">We ensure a smooth and hassle-free visa application experience for all users.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider1}
              alt="Slide 2"
              className="w-full md:h-[600px] object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-[#00BFFF]">Explore Visas</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg">Browse and compare visas for different countries.</p>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg">Find the perfect visa that matches your needs, from study to work to travel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider3}
              alt="Slide 3"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-[#00BFFF]">Track Your Application</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg">Stay updated with real-time tracking of your visa status.</p>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg">Get instant notifications and updates on your application progress.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
