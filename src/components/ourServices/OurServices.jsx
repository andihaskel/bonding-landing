import React, { useState } from 'react'
import EmptyList from '../common/emptyList/EmptyList'
import ServicesList from '../servicesList/ServicesList'
import { ServicesData } from '../ServicesData/ServicesData'
import { delay, motion } from 'framer-motion'
import Container from 'react-bootstrap/Container'
import './ourServices.scss'

const OurServices = () => {

  const [services, setServices] = useState(ServicesData)

  return (
    <div className='ourServices'>
      <Container>
        {/* Service List & Empty View */}
        {!services.length ? <EmptyList /> : <ServicesList services={services} />}
      </Container>
    </div>
  )
}

export default OurServices