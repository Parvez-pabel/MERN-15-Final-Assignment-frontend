import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Header = () => {
  // Slide data array
  const slides = [
    {
      id: 1,
      title: "Hello there",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
      bgImage:
        "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
      buttonText: "Get Started",
      btnClass: "btn-primary",
    },
    {
      id: 2,
      title: "Discover the Future",
      description:
        "Explore amazing new features and take your productivity to the next level with our platform.",
      bgImage:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Learn More",
      btnClass: "btn-secondary",
    },
    {
      id: 3,
      title: "Join Our Community",
      description:
        "Connect with thousands of creators around the world and share your passion today.",
      bgImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Sign Up Now",
      btnClass: "btn-accent",
    },
  ];

  return (
    <header className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                  <p className="mb-5">{slide.description}</p>
                  <button className={`btn ${slide.btnClass}`}>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Header;
