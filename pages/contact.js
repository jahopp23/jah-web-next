import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import CustomNav from './CustomNav.js'
import Helmet from 'react-helmet';

export default function Contact() {
  return (
    <>

    <Helmet>
      <title>John A. Hopper Web Developer</title>
      <meta name='description' content='John A. Hopper Web Developer 2021' />
    </Helmet>
  <CustomNav />

    <Container>
    <Row>
    <h1 style={{ fontWeight: 'bolder', marginTop: '1.00em', marginLeft: '1.00em' }}>Contact</h1>
    <Card style={{ marginTop: '0.00em;', marginBottom: '2.00em', borderStyle: 'none'}}>

  <Card.Body style={{ textAlign:'center' }}>

    <Card.Text style={{marginLeft: '1.00em'}}>
      Contact me for full-time, part-time, and remote web development work.
    </Card.Text>

    <Button variant="primary" href="mailto:jahopp@gmail.com" target="_blank" >Email Me</Button>
    <Button style={{ marginLeft: '2.00em' }}variant="primary" target="_blank" href="https://www.linkedin.com/in/john-allen-hopper-874424aa/">LinkedIn</Button>


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
