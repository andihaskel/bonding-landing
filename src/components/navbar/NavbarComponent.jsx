import React, { useState } from 'react'
import { delay, motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarComponent.scss'

import Logo from '/Bonding_logo.svg'


const NavbarComponent = () => {
  return (
    <div className='NavbarComponent'>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid>
            <Navbar.Brand href="/">
              <motion.img 
                src={Logo} 
                alt="" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1.5 }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Navbar.Brand href="/">
                      <img src={Logo} alt="" />
                    </Navbar.Brand>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1">
                    <Nav.Link href="#WhatWeDo">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 2 }} 
                      >
                        Services
                      </motion.span></Nav.Link>
                    <Nav.Link href="#RecentProjects">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 2.5 }}
                      >
                        Portfolio
                      </motion.span></Nav.Link>
                    <Nav.Link href="#">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 3 }}
                      >
                        Testimonials
                        </motion.span></Nav.Link>
                    <Nav.Link className='btn' href="#Contact">
                      <motion.span className='extend'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.5 }}
                        transition={{ duration: 3 }}
                      >
                        Get In Touch
                        </motion.span></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default NavbarComponent