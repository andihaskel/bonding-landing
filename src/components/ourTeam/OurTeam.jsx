import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import './ourTeam.scss';
import Andres_Haskel from '/team-1.webp';
import Gabriel_Bursztein from '/team-2.webp';

const OurTeam = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  const teamMembers = [
    { 
      img: Andres_Haskel,
      name: 'Andres Haskel',
      title: 'CEO',
      text: '+10 years of experience working as an independent engineer as well as in large corporations. Committed to delivering high-quality solutions.',
      twitterLink: 'https://twitter.com/AndresHaskel',
      linkedinLink: 'https://www.linkedin.com/in/andreshaskel/',
    },
    { 
      img: Gabriel_Bursztein,
      name: 'Gabriel Bursztein',
      title: 'CTO',
      text: 'Passionate about technology and innovation, I bring over 8 years of experience to the table. My goal is to help businesses grow by turning visionary ideas into tangible products.',
      twitterLink: '#',
      linkedinLink: 'https://www.linkedin.com/in/gabrielbursztein/',
    },
    // { 
    //   img: Michael_Brown,
    //   name: 'Michael Brown',
    //   title: 'Position Name',
    //   text: 'Lorem ipsum dolor sit amet consectetur. Id turpis maecenas nunc imperdiet sed ultricies mi. Elementum nulla nec netus cursus vel tempor nisl. Egestas.',
    //   twitterLink: '#',
    //   linkedinLink: '#',
    // },
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
      className='ourTeam'
      ref={ref} 
    >
      <Container>
        <motion.div 
          className='title-container text-center' 
        >
          <motion.h2>Meet Our Founders</motion.h2>
        </motion.div>

        <motion.div 
          className="row justify-content-center"
        >
          {teamMembers.map((member, item) => (
            <motion.div className="col-12 col-md-6 col-lg-4 text-center mb-4 mb-lg-0" key={item}>
              <motion.div className='member_card' whileHover={{boxShadow: "2px 8px 24px 0 rgba(1, 17, 50, 0.08)", color: "none"}}>
                <div className='member_img-container'>
                  <motion.img className='img-fluid' src={member.img} alt={member.name} variants={imageVariants} />
                </div>
                <div className='member_content-container'>
                  <motion.h4 variants={imageVariants}>{member.name}</motion.h4>
                  <motion.p variants={imageVariants}>{member.title}</motion.p>
                  <motion.p variants={imageVariants}>{member.text}</motion.p>
                  {/* <ul className='socials d-flex align-items-center justify-content-evenly'>
                    <motion.li >
                      <a href={member.twitterLink}>
                        <motion.img 
                          src={TwitterIcon} alt="" 
                          whileHover={{scale: 1.5}}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                        />
                      </a>
                    </motion.li>
                    <motion.li >
                      <a href={member.linkedinLink}>
                        <motion.img 
                          src={LinkedinIcon} alt="" 
                          whileHover={{scale: 1.5}}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </a>
                    </motion.li>
                  </ul> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='join-container text-center'>
          <h3>Are you ready to join our team?</h3>
          <motion.a 
            href="#Contact" 
            className='btn'
          >
            Join Our Team
          </motion.a>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default OurTeam