import React, { useRef, useState } from "react";
import { Slide } from "react-awesome-reveal"; // Import Slide animation
import AOS from "aos";
import "aos/dist/aos.css";
import clientAnimation from "../assets/Animation - client.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Lottie from "lottie-react";
const HappyClients = () => {
  // Sample client data
  const clients = [
    {
      name: "John Doe",
      feedback:
        "VisaMate made my visa application process so much easier. Highly recommended!",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      feedback:
        "A seamless experience! The platform is user-friendly and reliable.",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Robert Brown",
      feedback:
        "Thanks to VisaMate, I got my visa without any hassle. The support team is excellent!",
      photo: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
      name: "Emily Johnson",
      feedback:
        "VisaMate exceeded my expectations! It was a pleasure using the service.",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Michael Lee",
      feedback:
        "The process was smooth, and I got my visa on time. Thank you, VisaMate!",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: "Sophia Taylor",
      feedback:
        "I loved how easy it was to apply for a visa using VisaMate. Great job!",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 py-12 " data-aos="fade-up">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-5 md:mb-0">
        Happy Clients Says
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto px-4 place-items-center">
        <div className="md:px-2"  data-aos="fade-right">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper max-w-xl mx-auto"
          >
            {clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-lg shadow-lg py-10 px-10 flex flex-col items-center text-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={client.photo}
                    alt={`${client.name}'s photo`}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-cyan-500"
                  />
                </div>

                <p className="italic text-gray-600 text-center mb-4">
                  "{client.feedback}"
                </p>

                <h4 className="text-lg font-semibold text-cyan-600">
                  {client.name}
                </h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div  data-aos="fade-left">
          <Lottie animationData={clientAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
