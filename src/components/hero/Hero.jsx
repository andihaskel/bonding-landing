import { motion } from 'framer-motion';
// import React from 'react';
import Lottie from 'lottie-react';
import Container from 'react-bootstrap/Container';
import './hero.scss';
// import HeroBigImg from '/hero-big-img.svg';
import heroAnimation from './hero-animation.json';
import BigTaskIcon from '/big-task-icon.svg';
import HtmlIcon from '/html-icon.svg';
import FlutterIcon from '/skill-icons_flutter-dark.svg';
// import NodeIconFour from '/skill-icons_nodejs-dark-four.svg';
import NodeIconThree from '/skill-icons_nodejs-dark-three.svg';
import NodeIconTwo from '/skill-icons_nodejs-dark-two.svg';
import NodeIconOne from '/skill-icons_nodejs-dark.svg';


const Hero = () => {
  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4,
        delay: i * 0.5
      }
    }),
  }

  const items = [
    { className: 'hero_img htmlIcon', src: HtmlIcon },
    { className: 'hero_img flutterIcon', src: FlutterIcon },
    { className: 'hero_img nodeIconOne', src: NodeIconOne },
    { className: 'hero_img nodeIconTwo', src: NodeIconTwo },
    { className: 'hero_img nodeIconThree', src: NodeIconThree },
    // { className: 'hero_img nodeIconFour', src: NodeIconFour },
    { className: 'hero_img nodeIconFive', src: BigTaskIcon },
  ]

  return (
    <div className='hero'>
      <Container fluid>
        <motion.div className="main_row row" style={{
          display: 'flex',
          // flex: 1,
          alignItems: 'center', /* Alinea verticalmente */
          // justifyContent: 'center', /* Alinea horizontalmente (opcional) */
        }}>
          <motion.div className="wrapper_title_container col-lg-6 col-xl-7">
            <div className='title-container'>
              <motion.h1>Strong Bonds, <br /> Stronger Products  </motion.h1>
              <motion.p>Our nearshore software development teams deliver user-oriented design, top-level development and cutting-edge AI solutions to bring your idea to life.</motion.p>
              <ul className="btn-container d-flex align-items-center">
                <motion.li>
                  <motion.a
                    href="#Contact"
                    className='btn'
                  >
                    Get In Touch
                  </motion.a>
                </motion.li>
                <motion.li>
                  <motion.a
                    href="#WhatWeDo"
                    className='btn secondary'
                  >
                    Our Services
                  </motion.a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          <div className="col-lg-6 col-xl-5 right-container" id={'div-1'}>
            <div id={'right-container-1'} style={{
              height: '100%',
              display: 'flex', /* Usa flexbox */
              alignItems: 'center', /* Alinea verticalmente */
              justifyContent: 'center', /* Alinea horizontalmente */
            }}>
              <Lottie width={100} height={100} animationData={heroAnimation} loop={true} />
            </div>
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              display: 'flex', /* Usa flexbox */
              alignItems: 'center', /* Alinea verticalmente */
              justifyContent: 'center', /* Alinea horizontalmente */
            }}>
              <div id={'right-container-2'} style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                // maxHeight: 440,
              }}>

                <motion.div
                  className='inner_container'
                  initial="initial" animate="animate"
                >
                  {/* <motion.img className='bigIcon' src={HeroBigImg} alt="" /> */}

                  {items.map((item, i) => (
                    <motion.img className={item.className} src={item.src} variants={imageVariants} custom={i} key={i} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
