import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';



export default function Home() {
  return (

<>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">JAH Web</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>


<Container>
<Jumbotron>


  <h1>John A. Hopper</h1>
  <h2>Web Developer</h2>

  <p>
     I am a web developer specializing in full-stack, front-end, UI, UX, and ecommerce development.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</Container>


</>

  )
}
