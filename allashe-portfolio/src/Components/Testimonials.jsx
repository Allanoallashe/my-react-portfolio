import React from 'react'
import './Testimonials.css'
import avatar from '../images/image2.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {AiFillStar} from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
  {
    avatar: avatar,
    name: 'Vince',
    review: 'Good Job'
  },
  {
    avatar: avatar,
    name: 'John',
    review: 'Did a wonderful job'
  },
  {
    avatar: avatar,
    name: 'Henry',
    review: 'Works Well'
  },
  {
    avatar: avatar,
    name: 'Tom',
    review: 'Highly Recommend'
  }
]

const Testimonials = () => {
  return (
    <section id='Testimonials' >
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper spaceBetween={30}
        centeredSlides={true}
        color='#fff'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="tests">
                <div className="avatar">
                  <img src={avatar} alt="" />
                <h5 className="client-name">{name}</h5>
                <small className="client-review">{review} <AiFillStar className='stars'/> <AiFillStar className='stars'/> <AiFillStar className='stars'/> <AiFillStar className='stars'/> <AiFillStar className='stars'/></small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials