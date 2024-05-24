import React, { useState, useRef, useEffect } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import './howWeWork.scss'
import ScheduleImg from '/andib-schedule.svg'
import Product_Discovery from '/Product_Discovery.svg'
import UxUi from '/UXUI.svg'
import Qa from '/QA.svg'
import Launch from '/Launch.svg'
import Development from '/Development.svg'
import Checklist from '/Checklist.svg'


const HowWeWork = () => {

  const ref = useRef()

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
      image: Checklist
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

  useEffect(() => {
    const interval = setInterval(() => {
      const nextTab = (activeTab + 1) % tabs.length;
      setActiveTab(nextTab);
      setStep(nextTab);
      if (nextTab === 0) {
        // If nextTab is 0, reset the step to 0 after a delay
        setTimeout(() => {
          setStep(0);
        }, 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, tabs.length]);

  const numberToWords = (num) => {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return units[num];
  }

  return (
    <div className='howWeWork text-center'>
      <Container>
        <div className='title-container'>
          <h2>This is how we work</h2>
          <p>We leverage the principles of Scrum methodology to effectively manageour dynamic teams, emphasizing efficiency and excellence. Through this agile approach, we foster seamless team work, flexibility, and punctual delivery of outstanding app development projects.</p>
        </div>
        
        <div className="tabs-container">
          <div className="tabs">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''} ${numberToWords(index)} ${index < activeTab ? 'previous' : ''} position-relative`}
              >
                <h4 className='custom-position-title'>{tab.title}</h4>
                  <div className="hexagon" style={{
                    backgroundImage: step === index ? 'linear-gradient(90deg, #8920EC, #8920EC)' : (step === 0 && index !== 0 ? 'linear-gradient(90deg, #F5D8FF, #F5D8FF)' : '#F5D8FF')
                  }}>
                  <img src={tab.image} alt="" />
                  </div>
                <h4>{tab.title}</h4>
              </div>
            ))}
            <div className="line-indicator">
              <div 
                className='inner-line-indicator'
                style={{ 
                  top: 0, 
                  left: 0, 
                  width: `${(step / (tabs.length - 1)) * 100}%`,
                  background: step === 0 ? 'linear-gradient(to right, #F5D8FF 0%, #F5D8FF 100%)' : 'linear-gradient(to right, #8920EC 0%, #8920EC 100%)'
                }} 
              ></div>
            </div>
          </div>
          <div className="tab-content">
            {/* Tab 1 content */}
            <div>
              <div className='tab-Product_Discovery text-white text-start' >
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6 mb-2 mb-lg-0">
                    <img src={ScheduleImg} alt=""/>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h3>Schedule a Free Consultation Call</h3>
                    <p>Let's discuss your goals, challenges, and how we can help you succeed. Book your slot now!</p>
                    <motion.a 
                      href="#Contact"
                      className='btn'
                    >
                      Let’s Talk
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HowWeWork