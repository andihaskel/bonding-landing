import React, { useState, useEffect, useRef } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import './serviceItem.scss'

const ServiceItem = ({
  singleService: {
    description,
    title,
    createdAt,
    authorName,
    cover,
    id,
  },
}) => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: '-100px'})

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
    <div 
      className='serviceItem'
      ref={ref}
    >
      <Link className='serviceItem-link' to={`/service/${id}`}>
        <motion.div 
          className='wrapper' 
        >
          <div className='text-center'>
            <motion.img 
              className='serviceItem-cover img-fluid' 
              src={cover} 
              alt={authorName} 
            />
          </div>

          <motion.div className='inner-wrapper'>
            <motion.div className='serviceItem_author d-flex align-items-center'>
              <h6>{authorName}</h6>
              <span> | </span>
              <h6>{createdAt}</h6>
            </motion.div>
            <motion.h3>{title}</motion.h3>
            <motion.p className='serviceItem-desc'>{description}</motion.p>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  )
}

export default ServiceItem