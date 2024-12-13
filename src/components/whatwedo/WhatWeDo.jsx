import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import './whatwedo.scss';
import IdCard from '/ai-code.svg';
import Computer from '/product-box.svg';


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
              <p>Our end-to-end development services cover every aspect from concept to launch, including UX/UI design, web and mobile development, infrastructure setup, QA testing, and ongoing maintenance.</p>
            </motion.div>
          </motion.div>
          <motion.div className="col-12 col-lg-6">
            <motion.div className="service-box"  whileHover={{backgroundColor: "#011132", color: "#ffffff"}}>
              <div className="img-container">
                <img className='second-img' src={IdCard} alt="" />
              </div>
              <h3>Custom AI Solutions</h3>
              <p>Develop innovative AI-powered products by leveraging advanced machine learning techniques, natural language processing (NLP), and state-of-the-art computer vision services to deliver transformative solutions.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default WhatWeDo