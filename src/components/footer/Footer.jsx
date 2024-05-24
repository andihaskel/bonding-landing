import React, { useState, useRef } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import './footer.scss'
import LogoB from '/Bonding_logo.svg'
import linkedinIcon from '/linkedin_w.svg'
import FacebookIcon from '/facebook_w.svg'
import InstagramIcon from '/instagram_w.svg'
import YoutubeIcon from '/youtube_w.svg'

const Footer = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: '-100px'})

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
      className='footer'
      ref={ref}
    >
      <Container>
        <motion.div 
          className='top_footer'
        >
          <motion.div className="row justify-content-between">
            <div className="col-12 col-md-5">
              <div className='logo_container'>
                <a href="/">
                  <motion.img src={LogoB} alt="Bonding"  />
                </a>
              </div>
              <motion.a 
                className='btn secondary mt-3 mb-3' 
                href="#Contact" 
              >Let’s Talk</motion.a>
              <motion.p >Lorem ipsum dolor sit amet consectetur. Id turpis maecenas nunc imperdiet sed ultricies mi. Elementum nulla nec netus cursus vel tempor nisl. Egestas.</motion.p>
            </div>
            <div className="col-12 col-md-6 offset-md-1 position-relative">
              <motion.div className="useful_links_container row mt-4 mt-md-0" >
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <motion.h3>Company</motion.h3>
                  <ul>
                    <motion.li>
                      <a href="#HowWeWork">About Us</a>
                    </motion.li>
                    <motion.li>
                      <a href="#WhatWeDo">Services</a>
                    </motion.li>
                    <motion.li>
                      <a href="#RecentProjects">Portfolio</a>
                    </motion.li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <motion.h3>Contact</motion.h3>
                  <ul>
                    <motion.li>
                      <a href="mailto:hello@bonding.dev">hello@bonding.dev</a>
                    </motion.li>
                    <motion.li>
                      <a href="mailto:jobs@bonding.dev">jobs@bonding.dev</a>
                    </motion.li>
                    <motion.li>
                      <a href="tel:+598 96 725 519">(+598) 96 725 519</a>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>

              <motion.ul className='socials_footer'>
                <motion.li>
                  <a href="#">
                    <motion.div className='social_icon_box' 
                      whileHover={{scale: 1.1}}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img src={linkedinIcon} alt="" />
                    </motion.div>
                  </a>
                </motion.li>
                <motion.li>
                  <a href="#">
                    <motion.div className='social_icon_box' 
                      whileHover={{scale: 1.1}}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img src={FacebookIcon} alt="" />
                    </motion.div>
                  </a>
                </motion.li>
                <motion.li>
                  <a href="#">
                    <motion.div className='social_icon_box' 
                      whileHover={{scale: 1.1}}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img src={InstagramIcon} alt="" />
                    </motion.div>
                  </a>
                </motion.li>
                <motion.li>
                  <a href="#">
                    <motion.div className='social_icon_box' 
                      whileHover={{scale: 1.1}}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img src={YoutubeIcon} alt="" />
                    </motion.div>
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

        <hr />

        <motion.div 
          className='bottom_footer text-center pb-4'
        >
          <p>© 2024. All rights reserved.</p>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default Footer