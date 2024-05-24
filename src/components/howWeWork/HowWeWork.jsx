import React, { useState, useRef, useEffect } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import './howWeWork.scss'
import ScheduleImg from '/andib-schedule.svg'
import Product_Discovery from '/Product_Discovery.svg'
import UxUi from '/UXUI.svg'
// import Qa from '/QA.svg'
import Launch from '/Launch.svg'
import Development from '/andib-development.svg'
import Checklist from '/Checklist-icon.svg'


const HowWeWork = () => {

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
      image: Checklist
    },
    {
      title: "Launch",
      image: Launch
    }
  ];

  const totalSteps = 5; // Total number of steps in the process
  const progressInterval = 20; // Interval in milliseconds for progressing to the next step
  const progressIncrement = 1 / (totalSteps * 50); // Increment step for smooth progress
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [nearestHexagonIndex, setNearestHexagonIndex] = useState(0);
  const [activeHexagonIndexes, setActiveHexagonIndexes] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + progressIncrement;
        if (nextProgress >= 1) {
          setCurrentStep(prevStep => (prevStep + 1) % totalSteps); // Increment currentStep and wrap around
          setActiveHexagonIndexes(prevIndexes => [(prevIndexes + 1) % totalSteps, nearestHexagonIndex]);
          return 0; // Reset progress when it reaches 100%
        }
        return nextProgress;
      });
    }, progressInterval);

    return () => clearInterval(interval);
  }, [totalSteps, progressInterval, progressIncrement, nearestHexagonIndex]);

  useEffect(() => {
    // Calculate the nearest hexagon index
    const adjustedProgress = progress - (0.5 / totalSteps); // Add 10% of each inner_container width to the progress
    const nearestIndex = Math.round(adjustedProgress * (totalSteps - 1));
    setNearestHexagonIndex(nearestIndex);
    setActiveHexagonIndexes(nearestIndex);
  }, [progress, totalSteps]);

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
        
        <div className='progress-bar-container'>
          <div className='progress-bar'>
            <div className='progress' style={{ width: `${progress * 100}%` }}></div>
          </div>

          <div className='hexagon-container'>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`
                  inner_container 
                  ${numberToWords(index)} 
                  ${currentStep === index ? 'zero' : ''} 
                  ${nearestHexagonIndex === index ? 'nearest' : ''}
                  ${index <= activeHexagonIndexes ? 'active' : ''}
                `}
              >
                <h4 className='custom-position-title'>{tab.title}</h4>
                  <div 
                    className='hexagon'
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${nearestHexagonIndex === index ? '#8920EC' : '#F5D8FF'}, ${nearestHexagonIndex === index ? '#8920EC' : '#F5D8FF'})`
                    }}
                  >
                    <img src={tab.image} alt="" />
                  </div>
                <h4>{tab.title}</h4>
              </div>
            ))}
          </div>

          <div className="tab-content">
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