import React from 'react';
import '../styles/Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Navigation aur Pagination modules add karo
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// 2. Swiper ke extra CSS import karo
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  return (
    <section className="hero-carousel" style={{ overflow: 'hidden' }}>
      <Swiper
        loop={true} 
        speed={1000} // Sliding speed thodi fast rakho manual ke liye
        autoplay={{
          delay: 3000, // 3 seconds rukega, fir slide karega (manual allow karne ke liye)
          disableOnInteraction: false, // User touch karega tab bhi autoplay band nahi hoga
        }}
        navigation={true} // Arrows dikhane ke liye
        pagination={{ clickable: true }} // Dots dikhane ke liye
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={1}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-slide slide-1">
            <h1>BIG DATA ANALYTICS LAB</h1>
            <p>Research • Analytics • Intelligent Data Systems</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-slide slide-2"> 
            <h1>INNOVATIVE RESEARCH</h1>
            <p>Machine Learning • AI • Deep Learning</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="hero-slide slide-3"> 
            <h1>SMART SOLUTIONS</h1>
            <p>Predictive Modeling • Data Mining • Cloud Computing</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
