import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import CustomNav from './CustomNav.js'
import Helmet from 'react-helmet';

export default function About () {
  return (

    <>

    <Helmet>
      <title>John A. Hopper Web Developer</title>
      <meta name='description' content='John A. Hopper Web Developer 2021' />
    </Helmet>

    <CustomNav />

    <Container>
    <Row>
    <h1 style={{ fontWeight: 'bolder', marginTop: '1.00em', marginBottom: '1.00em', marginLeft: '1.00em' }}>About</h1>
    <Card style={{ marginTop: '0.00em', width: '90%', borderStyle: 'none' }} >

  <Card.Body>

    <Card.Text>
    <p style={{ padding: '1.00em' }}>My journey began at The University of North Texas while studying for a degree in anthropology. My focus was on culture, technology, digital media, and social change. As my anthropological knowledge expanded, so did my interest in the fields of computer science, programming, and software.

In 2016, I enrolled in a professional software development training program at Coding Dojo Dallas. Here, I learned how to construct full stack software applications for the modern web. Using the AGILE development process, I built software applications in HTML, CSS, Python, JavaScript, Python, and Ruby -- all reliant on MVC architecture, RESTful routes, CRUD methods, and responsive web design. During my time at Coding Dojo, I was awarded certificates for both HTML/CSS Website Design (Yellow Belt), and Ruby on Rails Full Stack Web Application (Black Belt).

Since completing Coding Dojo, I have worked as a developer for a local startup company using AngularJS, built website templates for local companies with Bootstrap and NodeJS, served as a freelance front-end web developer at an award-winning advertising agency, taught coding/programming to kids K-5th using tools like Scratch and Python, managed website CMS patforms (Shopify, Amazon, Etsy, Wordpress) for an online retail company, worked at an international corporation developing websites for eCommerce & Marketing, and served as Senior Web Developer / Ecommerce Coordinator for a multi-million dollar Dallas-based startup.

For me, coding is the ultimate synthesis of creativity, artistic expression, technical skill, problem-solving, and critical thinking. I would not want to work in any other profession because the "work" I do is not perceived as "work" in my eyes. It is pure enjoyment! I am able to build great applications and bring success to business.</p>

<p style={{ padding: '1.00em' }}>Presently, I enjoy learning and building with latest web technologies, such as React and Next (which this website is built with), studying foreign language, and cybersecurity.</p>
     </Card.Text>

     <ListGroup variant="flush" style={{ textAlign: 'left' }}>

    <ListGroup.Item><Button variant="primary" href="mailto:jahopp@gmail.com">Email Me</Button></ListGroup.Item>
    <ListGroup.Item><Button variant="primary" target="_blank" href="https://www.linkedin.com/in/john-allen-hopper-874424aa/">LinkedIn</Button></ListGroup.Item>
    <ListGroup.Item><Button variant="primary" target="_blank" href="https://www.github.com/jahopp23">GitHub</Button></ListGroup.Item>
    </ListGroup>
  </Card.Body>
</Card>
</Row>
</Container>
<footer className={styles.footer}>
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer">
    Powered by{' '}
    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  </a>
</footer>
</>


  )
}
