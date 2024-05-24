import React, { useState, useEffect, useRef } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import ProjectOne from '/andib-project-1a.webp'
import ProjectTwo from '/andib_project_2.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import './recentProjects.scss'

const RecentProjects = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  const projects = [
    { 
      text: '“Our experience working with the company has been nothing short of exceptional. Their expertise and dedication have had a positive impact on our projects, delivering outstanding results.”',
      title: 'Site Travel',
      author: 'Emily Johnson',
      link: '#',
      img: ProjectOne
    },
    { 
      text: '“Our experience working with the company has been nothing short of exceptional. Their expertise and dedication have had a positive impact on our projects, delivering outstanding results.”',
      title: 'Site Travel 2',
      author: 'Emily Johnson 2',
      link: '#',
      img: ProjectTwo
    },
  ]

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
    <motion.div 
      className='recentProjects'
      ref={ref}  
    >
      <Container>
        <motion.div>
          <motion.div 
            className='title-container text-center'
          >
            <motion.h2>Our Recent Projects</motion.h2>
            <motion.p>There are many variations of passages of Lorem Ipsum availablebut the majority have suffered alteration in some form.</motion.p>
          </motion.div>

          {projects.map((project, item) => (
            <motion.div className="d-none d-md-block" key={item}>
            <motion.div className='row align-items-center'>
              <motion.div 
                className="col-12 col-md-6 order-2 order-md-1" 
              >
                <motion.p>{project.text}</motion.p>
                <motion.h4>{project.title}</motion.h4>
                <motion.p className='author'>{project.author}</motion.p>
                <hr />
                <motion.a 
                  className='position-relative' 
                  href={project.link} 
                >Read More</motion.a>
              </motion.div>
              <motion.div className="col-12 col-md-6 order-1 order-md-2">
                <div className='img-container position-relative text-center mb-2 mb-md-0'>
                  <motion.img className='img-fluid' src={project.img} alt="" />
                </div>
              </motion.div>
            </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Swiper slider */}
        <motion.div 
          className='d-md-none'
        >
          <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="recent_projects_swiper"
          >
            {projects.map((project, item) => (
              <SwiperSlide key={item}>
                <div className='inner_container-projects_swiper'>
                  <motion.div 
                    className="row"
                  >
                    <div className="col-12 col-md-6 order-2">
                      <p>{project.text}</p>
                      <h4>{project.title}</h4>
                      <p className='author'>{project.author}</p>
                      <hr />
                      <a className='position-relative' href={project.link}>Read More</a>
                    </div>
                    <div className="col-12 col-md-6 order-1">
                      <div className='img-container position-relative text-center mb-2 mb-md-0'>
                        <img className='img-fluid' src={project.img} alt=""/>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default RecentProjects