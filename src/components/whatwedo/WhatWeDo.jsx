import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import './whatwedo.scss';
import Computer from '/andib-service-1.svg';
import IdCard from '/andib-service-2.svg';

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const WhatWeDo = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div 
      className='whatWeDo text-center'
      ref={ref}
      initial="initial" 
      animate={isInView && 'animate'}
    >
      <Container>
        <motion.div className='title-container'>
          <h2>Our Services</h2>
          {/* <p>There are many variations of passages of Lorem Ipsum availablebut the majority have suffered alteration in some form.</p> */}
        </motion.div>

        <motion.div className="row" >
          <motion.div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <motion.div className="service-box"  whileHover={{backgroundColor: "#011132", color: "#ffffff"}}>
              <div className="img-container">
                <img className='first-img' src={Computer} alt="" />
              </div>
              <h3>Full Product Development</h3>
              <p>Covers everything from concept to launch. We provide end-to-end development services covering everything from UX/UI design, web and mobile development, infrastructure setup, QA testing, and ongoing maintenance.</p>
            </motion.div>
          </motion.div>
          <motion.div className="col-12 col-lg-6">
            <motion.div className="service-box"  whileHover={{backgroundColor: "#011132", color: "#ffffff"}}>
              <div className="img-container">
                <img className='second-img' src={IdCard} alt="" />
              </div>
              <h3>Staff Augmentation</h3>
              <p>From project-specific needs to long-term support, our flexible service provides top-tier talent on demand. Boost productivity, shorten timelines, and achieve cost-effective solutions tailored to your requirements.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default WhatWeDo