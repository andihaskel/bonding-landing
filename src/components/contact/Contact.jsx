import emailjs from 'emailjs-com';
import * as formik from 'formik';
import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import './contact.scss';

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
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  });


  const [loading, setLoading] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    // Send email using emailjs-com
    emailjs.sendForm('service_s5wjd9q', 'template_t2o7ak8',  '#emailForm', 'YIFMl9ZRCxM-Btmuc')
      .then((response) => {
        console.log('Email sent:', response);
        setSubmitting(false);
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 3000); 
        resetForm();
      }, (error) => {
        console.error('There was an error sending the email:', error);
        setSubmitting(false);
      }).finally(() => {
        setLoading(false);
      });
  };

  
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
              <a className='position-relative' 
              href='https://calendly.com/andres-haskel/introduction-call?back=1&month=2024-05'
              target='_blank'
              >Let’s Talk</a>
            </motion.div>
          </div>
          <div className='col-12 col-lg-7'>
            <motion.div 
              className='form_container'
            >
            {showBanner && <div className="success-banner fade-in-out">Email sent successfully!</div>}
              <Formik
                validationSchema={schema}
                onSubmit={sendEmail}
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit} id="emailForm">
                    <Row className='mb-4'>
                      <Form.Group as={Col} md='6' controlId='validationFormik01'>
                        <Form.Label>Name <span className='asterisk'>*</span></Form.Label>
                        <Form.Control
                          type='text'
                          name='name'
                          placeholder='Full Name'
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.name}
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
                          isInvalid={!!errors.email}
                        />

                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
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
                    <Button type='submit'>
                    {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          {/* <span className="sr-only">Loading...</span> */}
                        </>
                      ) : 'Send Message'}
                    </Button>
                  </Form>
                )}
              </Formik>
              <ToastContainer />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact