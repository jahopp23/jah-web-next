import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import CustomNav from './CustomNav.js'

export default function Contact() {
  return (
    <>
  <CustomNav />

    <Container>

    <Card style={{ marginTop: '2.00em;', marginBottom: '2.00em' }}>

  <Card.Body>
    <Card.Title>Contact Me</Card.Title>
    <Card.Text>
      Contact me for full-time, part-time, and remote web development work.
     </Card.Text>
    <Button variant="primary" href="mailto:jahopp@gmail.com">Email Me</Button>
    <Button style={{ marginLeft: '2.00em' }}variant="primary" href="https://www.linkedin.com/in/john-allen-hopper-874424aa/">LinkedIn</Button>


  </Card.Body>
</Card>

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
