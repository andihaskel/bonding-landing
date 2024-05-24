import React, { useState, useRef } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './contact.scss'

const Contact = () => {

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

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  });

  return (
    <div 
      className='contact'
      ref={ref}
    >
      <Container>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 col-lg-5 mb-4 mb-lg-0'>
            <motion.div 
              className='title-container'
            >
              <h2>Contact Now</h2>
              <p>I would love to talk to you about your project or needs. Fill in the form or send us an email to <a href='mailto:hello@bonding.dev'>hello@bonding.dev</a></p>
            </motion.div>

            <motion.div 
              className='schedule_a_call-container'
            >
              <h3>Schedule a Call</h3>
              <p>Feel free to select a time at your convenience!</p>
              <a className='position-relative' href='/contact'>Let’s Talk</a>
            </motion.div>
          </div>
          <div className='col-12 col-lg-7'>
            <motion.div 
              className='form_container'
            >
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  firstName: '',
                  email: '',
                  message: '',
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className='mb-4'>
                      <Form.Group as={Col} md='6' controlId='validationFormik01'>
                        <Form.Label>Name <span className='asterisk'>*</span></Form.Label>
                        <Form.Control
                          type='text'
                          name='firstName'
                          placeholder='First Name'
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md='6' controlId='validationFormik02'>
                        <Form.Label>Email <span className='asterisk'>*</span></Form.Label>
                        <Form.Control
                          type='email'
                          name='email'
                          placeholder='Your Email'
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                          isInvalid={!!errors.email}
                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className='mb-4'>
                    <Form.Group as={Col} md='12' controlId='validationFormik03'>
                        <Form.Label>Message <span className='asterisk'>*</span></Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={4}
                          // type='textarea'
                          placeholder='Your Message'
                          name='message'
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                        />

                        <Form.Control.Feedback type='invalid'>
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type='submit'>Send Message</Button>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact