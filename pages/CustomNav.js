import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'

export default class CustomNav extends Component {
  render () {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ marginLeft: '1.00em', fontWeight: 'bolder' }} href="/">JAH Web <i className="fa fa-globe" aria-hidden="true"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: '1.00em' }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
