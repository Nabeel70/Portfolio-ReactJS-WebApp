import React from 'react';
import './testimonial.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import AVTR1 from '../../assets/shuvosays.jpg';
import AVTR2 from '../../assets/babybabe.jpg';
import AVTR3 from '../../assets/james.png';

const testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    spaceBetween={40} 
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper, SwiperSlide) => console.log(swiper)}
>

      <SwiperSlide className="testimonial">
      <div className="client__avatar">
      <img src={AVTR1} alt="client1" />
      </div>
        <a href='https://www.fiverr.com/muhammadnabe182' target="_blank" className="client__name" rel="noreferrer">ShuvoSays</a>
        <small className="client__review">
        Thank You, Nabeel! You did more than what I expected! Thank you! The seller is so good to work with.
        </small>
      </SwiperSlide>

      <SwiperSlide className="testimonial">
      <div className="client__avatar">
      <img src={AVTR2} alt="client1" />
      </div>
      <a href='https://www.fiverr.com/muhammadnabe182' target="_blank" className="client__name" rel="noreferrer">Babybabe</a>
      <small className="client__review">
      Nice experience!
      </small>
    </SwiperSlide>


    <SwiperSlide className="testimonial">
    <div className="client__avatar">
    <img src={AVTR3} alt="client1" />
    </div>
    <a href='https://www.fiverr.com/muhammadnabe182' target="_blank" className="client__name" rel="noreferrer">Kavin</a>
    <small className="client__review">
    Good job! Nice
    </small>
  </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default testimonials