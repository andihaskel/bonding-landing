import React, { useRef } from 'react'
import ServiceItem from './serviceItem/ServiceItem'
import singleService from '../../pages/singleService/SingleService'
import { delay, motion, useInView } from 'framer-motion'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import './servicesList.scss'

const ServicesList = ({ services }) => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    }
  }
  
  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4
      }
    }
  }

  return (
    <div className='servicesList'>
      <motion.div 
        className='title-container text-center' 
        ref={ref}
      >
        <motion.h2>Our Services</motion.h2>
        <motion.p>There are many variations of passages of Lorem Ipsum availablebut the majority have suffered alteration in some form.</motion.p>
      </motion.div>

      {/* Swiper slider Desktop & Tablet */}
      <div className='d-none d-md-block'>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="services_swiper"
        >
          {services.map((service, item) => (
            <SwiperSlide key={item}>
              <ServiceItem key={service.id} singleService={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper slider Mobile */}
      <div className='d-block d-md-none'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="services_swiper"
        >
          {services.map((service, item) => (
            <SwiperSlide key={item}>
              <ServiceItem key={service.id} singleService={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ServicesList