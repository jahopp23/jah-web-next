import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import CustomNav from './CustomNav.js'
import Helmet from 'react-helmet';



export default function Home() {

  return (

<>

<Helmet>
  <title>John A. Hopper Web Developer</title>
  <meta name='description' content='John A. Hopper Web Developer 2021' />
</Helmet>

<CustomNav />



<Jumbotron style={{ marginTop: '2.00em', marginBottom: '2.00em;', backgroundColor: 'white'}}>


 <Container>
  <h1 style={{ fontWeight: 'bolder' }}>John A. Hopper</h1>
  <h2>Web Developer</h2>

  <p>
     I specialize in full-stack, front-end, UI, UX, and ecommerce development.
  </p>
  </Container>

  <Container>
  <ListGroup variant="flush" style={{ textAlign: 'left' }}>
<ListGroup.Item><Button variant="default" href="/JAH_Resume_2020.docx" download>Download Resume</Button>
</ListGroup.Item>
<ListGroup.Item>
<Button variant="default" href="/portfolio">View My Work</Button>
</ListGroup.Item>
<ListGroup.Item>
<Button variant="default" href="mailto:jahopp@gmail.com">Email Me</Button>
</ListGroup.Item>
</ListGroup>
</Container>
</Jumbotron>



<div className="bodyMain" style={{ backgroundImage: `url(matrix.gif)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '75vh', maxHeight: '250vh' }}>

<Container>
   <Row style={{ paddingBottom: '6.00em' }}>

      <Col style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem', marginTop: '6.00em' }}>
       <Card.Body>
         <Card.Title style={{ textAlign: 'center', fontWeight: 'bolder' }}>Full Stack</Card.Title>

         <ListGroup variant="flush">
    <ListGroup.Item>Web Server, Database, and Views</ListGroup.Item>
    <ListGroup.Item>API Integration</ListGroup.Item>
    <ListGroup.Item>Serveless Deployment</ListGroup.Item>
    <ListGroup.Item>NPM, Yarn, Bower, Gulp</ListGroup.Item>
  </ListGroup>

       </Card.Body>
      </Card>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem',  marginTop: '6.00em' }}>
       <Card.Body>
         <Card.Title style={{ textAlign: 'center', fontWeight: 'bolder' }}>Front End</Card.Title>
         <ListGroup variant="flush">
    <ListGroup.Item>Mobile-first, responsive, scalable web applications</ListGroup.Item>
    <ListGroup.Item>HTML5, CSS3, SASS, Liquid, PHP, JavaScript, JSX, JQuery</ListGroup.Item>
    <ListGroup.Item>UI/UX design & dev</ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>

       </Card.Body>
      </Card>




      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem',  marginTop: '6.00em' }}>
       <Card.Body>
         <Card.Title style={{ textAlign: 'center', fontWeight: 'bolder' }}>Ecommerce</Card.Title>
         <ListGroup variant="flush">
    <ListGroup.Item>Advanced Shopify Development, WordPress, Amazon Seller, FB, IG</ListGroup.Item>
    <ListGroup.Item>SEO, Analytics, Tag Manager, Marketing Hub</ListGroup.Item>
    <ListGroup.Item>Product Management</ListGroup.Item>
  </ListGroup>

       </Card.Body>
      </Card>


      </Col>
   </Row>

</Container>
</div>
<footer className={styles.footer}>
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by{' '}
    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  </a>
</footer>




</>

  )
}
