import React, { useState, useRef } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import './howWeWork.scss'
import ScheduleImg from '/andib-schedule.svg'
import Product_Discovery from '/Product_Discovery.svg'
import UxUi from '/UXUI.svg'
import Qa from '/QA.svg'
import Launch from '/Launch.svg'
import Development from '/Development.svg'

const HowWeWork = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  const [activeTab, setActiveTab] = useState(0);
  const [step, setStep] = useState(0);

  const tabs = [
    {
      title: "Product Discovery",
      image: Product_Discovery
    },
    {
      title: "UX/UI",
      image: UxUi
    },
    {
      title: "Development",
      image: Development
    },
    {
      title: "QA",
      image: Qa
    },
    {
      title: "Launch",
      image: Launch
    }
  ];

  const handleTabClick = (i) => {
    setActiveTab(i);
    setStep(i);
  }

  const numberToWords = (num) => {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return units[num];
  }

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
      className='howWeWork text-center'
      ref={ref}
    >
      <Container>
        <motion.div className='title-container' variants={textVariants} initial='initial' animate={isInView && 'animate'}>
          <h2>This is how we work</h2>
          <p>We leverage the principles of Scrum methodology to effectively manageour dynamic teams, emphasizing efficiency and excellence. Through this agile approach, we foster seamless team work, flexibility, and punctual delivery of outstanding app development projects.</p>
        </motion.div>
        
        <motion.div className="tabs-container">
          <motion.div className="tabs">
            {tabs.map((tab, index) => (
              <motion.div
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''} ${numberToWords(index)} ${index < activeTab ? 'previous' : ''} position-relative`}
                onClick={() => handleTabClick(index)}
                variants={imageVariants} initial='initial' animate={isInView && 'animate'}
              >
                <h4 className='custom-position-title'>{tab.title}</h4>
                <motion.div className="hexagon">
                  <img src={tab.image} alt="" />
                </motion.div>
                <h4>{tab.title}</h4>
              </motion.div>
            ))}
            <motion.div className="line-indicator" variants={imageVariants} initial='initial' animate={isInView && 'animate'}>
              <motion.div 
                className='inner-line-indicator'
                style={{ top: 0, left: 0, width: `${(step / (tabs.length - 1)) * 100}%`, backgroundColor: activeTab === step ? '#8920EC' : 'rgba(137, 32, 236,0.5)' }} 
              ></motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="tab-content">
            {/* Tab 1 content */}
            <motion.div className={`content ${activeTab === 0 ? 'active' : ''}`}>
              <motion.div className='tab-Product_Discovery text-white text-start' variants={imageVariants} initial='initial' animate={isInView && 'animate'}>
                <motion.div className="row align-items-center">
                  <motion.div className="col-12 col-lg-6 mb-2 mb-lg-0">
                    <motion.img src={ScheduleImg} alt="" variants={imageVariants}/>
                  </motion.div>
                  <motion.div className="col-12 col-lg-6" variants={imageVariants}>
                    <h3>Schedule a Free Consultation Call</h3>
                    <p>Let's discuss your goals, challenges, and how we can help you succeed. Book your slot now!</p>
                    <motion.a 
                      href="#"
                      className='btn' 
                      whileHover={{scale: 1.1}}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Let’s Talk
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Tab 2 content */}
            <motion.div className={`content ${activeTab === 1 ? 'active' : ''}`}>
              <h2>Content for Tab 2</h2>
              <p>This is the content for Tab 2.</p>
              <motion.div>Other complex HTML structure...</motion.div>
            </motion.div>
            {/* Tab 3 content */}
            <motion.div className={`content ${activeTab === 2 ? 'active' : ''}`}>
              <h2>Content for Tab 3</h2>
              <p>This is the content for Tab 3.</p>
              <motion.div>Other complex HTML structure...</motion.div>
            </motion.div>
            {/* Tab 4 content */}
            <motion.div className={`content ${activeTab === 3 ? 'active' : ''}`}>
              <h2>Content for Tab 4</h2>
              <p>This is the content for Tab 4.</p>
              <motion.div>Other complex HTML structure...</motion.div>
            </motion.div>
            {/* Tab 5 content */}
            <motion.div className={`content ${activeTab === 4 ? 'active' : ''}`}>
              <h2>Content for Tab 5</h2>
              <p>This is the content for Tab 5.</p>
              <motion.div>Other complex HTML structure...</motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default HowWeWork