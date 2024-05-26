import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './recentProjects.scss';
import ProjectOne from '/andib-project-1a.webp';
import ProjectTwo from '/andib_project_2.webp';



const RecentProjects = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  const projects = [
    { 
      text: 'Mobile application that allows pharmacies and pharmacists to create and apply for work shifts with a competitive salary. It streamlines the process of finding and scheduling temporary staff. This ensures that pharmacies can maintain optimal staffing levels and provide excellent service to their customers.',
      title: 'Look4shifts',
      author: 'Tech stack: Flutter, React.js, Nest,js, PostgreSQL, AWS services',
      link: '#',
      img: ProjectOne
    },
    { 
      text: 'System designed for the management and maintenance of parking facilities. It allows real-time reporting of incidents and failures and assigns responsible parties for their repair. This ensures that parking facilities remain functional and safe for all users.',
      title: 'Park Order',
      author: 'Tech stack: React.js, Nest.js, PostgreSQL, AWS services.',
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
            {/* <motion.p>There are many variations of passages of Lorem Ipsum availablebut the majority have suffered alteration in some form.</motion.p> */}
          </motion.div>

          {projects.map((project, item) => (
            <motion.div className="d-none d-md-block" key={item}>
            <motion.div className='row align-items-center'>
              <motion.div 
                className="col-12 col-md-6 order-2 order-md-1" 
              >
                <motion.h4>{project.title}</motion.h4>
                <motion.p className='author'>{project.author}</motion.p>
                <motion.p>{project.text}</motion.p>
                <hr />
                {/* <motion.a 
                  className='position-relative' 
                  href={project.link} 
                >Read More</motion.a> */}
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