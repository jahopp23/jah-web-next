import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import CustomNav from './CustomNav.js'
import Helmet from 'react-helmet';

export default function Blog () {
  return (
   <>
    <Helmet>
      <title>John A. Hopper Web Developer</title>
      <meta name='description' content='John A. Hopper Web Developer 2021' />
    </Helmet>
    <CustomNav />
    <Container>
    <Row>
    <Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
  <Card.Img variant="top" src="/matrix.gif" />
  <Card.Body>
    <Card.Title>My Coding Journey</Card.Title>
    <Card.Subtitle>by John A. Hopper Dec. 31, 2020</Card.Subtitle>

    <Button variant="primary" href="https://www.clnwash.com" target="_blank" >Visit</Button>
  </Card.Body>
 </Card>
    </Row>
    </Container>
    </>
  )
}
