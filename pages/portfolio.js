import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import CustomNav from './CustomNav.js'
import Helmet from 'react-helmet';

export default function Portfolio() {
  return (

<>

<Helmet>
  <title>John A. Hopper Web Developer</title>
  <meta name='description' content='John A. Hopper Web Developer 2021' />
</Helmet>
<CustomNav />
<Container>
   <Row style={{ paddingBottom: '2.00em' }}>
   <Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
 <Card.Img variant="top" src="/cln_skin_care.jpg" />
 <Card.Body>
   <Card.Title>CLn Skin Care</Card.Title>
   <Card.Subtitle>www.clnwash.com</Card.Subtitle>
   <Card.Text>
     Senior Web Developer / Ecommerce Coordinator
   </Card.Text>
   <Card.Text>
    Shopify
    </Card.Text>
    <Card.Text>
    2020
    </Card.Text>
   <Button variant="primary" href="https://www.clnwash.com" target="_blank" >Visit</Button>
 </Card.Body>
</Card>
<Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
<Card.Img variant="top" src="/ez-flo.jpg" />
<Card.Body>
<Card.Title>EZ-FLO International</Card.Title>

<Card.Text>
  Front End Developer
</Card.Text>
<Card.Text>
 HTML5, CSS3, PHP, JavaScript, Wordpress
 </Card.Text>
 <Card.Text>
 2018
 </Card.Text>
<Button variant="primary" href="https://www.ez-flo.net" target="_blank">Visit</Button>
</Card.Body>
</Card>
<Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
<Card.Img variant="top" src="/thesleepycottage.jpg" />
<Card.Body>
<Card.Title>The Sleepy Cottage</Card.Title>

<Card.Text>
  Front End Developer / Ecommerce
</Card.Text>
<Card.Text>
 Shopify
 </Card.Text>
 <Card.Text>
 2018
 </Card.Text>
<Button variant="primary" href="https://www.thesleepycottage.com" target="_blank">Visit</Button>
</Card.Body>
</Card>
<Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
<Card.Img variant="top" src="/teasdale.jpg" />
<Card.Body>
<Card.Title>Teasdale Latin Foods</Card.Title>

<Card.Text>
  Front End Developer - Johnson & Sekin
</Card.Text>
<Card.Text>
 HTML5, CSs3, Bootstrap, Gulp, PHP, Laravel Server, Statamic CMS
 </Card.Text>
 <Card.Text>
 2017
 </Card.Text>
<Button variant="primary" href="http://www.teasdalelatinfoods.com" target="_blank">Visit</Button>
</Card.Body>
</Card>

<Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
<Card.Img variant="top" src="/mexene.jpg" />
<Card.Body>
<Card.Title>Mexene Chili Powder</Card.Title>

<Card.Text>
  Front End Developer - Johnson & Sekin
</Card.Text>
<Card.Text>
 HTML5, CSs3, Bootstrap, Gulp, PHP, Laravel Server, Statamic CMS
 </Card.Text>
 <Card.Text>
 2017
 </Card.Text>
<Button variant="primary" href="http://www.mexene.com" target="_blank">Visit</Button>
</Card.Body>
</Card>
<Card style={{ width: '100%', marginTop: '2.00em', marginBottom: '2.00em' }}>
<Card.Img variant="top" src="/dsisw.jpg" />
<Card.Body>
<Card.Title>DSI Southwest</Card.Title>

<Card.Text>
  Freelance Web Developer
</Card.Text>
<Card.Text>
 HTML, CSS, <a href="https://isotope.metafizzy.co/">JavaScript Isotope Filter & Sort</a>
 </Card.Text>
 <Card.Text>
 2019
 </Card.Text>
<Button variant="primary" href="http://www.dsisw.com/Manufacturers" target="_blank">Visit</Button>
</Card.Body>
</Card>
<Card style={{ textAlign: 'center'}}>
<Card.Body>
<Card.Text>
<Button style={{ marginLeft: '2.00em' }}variant="primary" target="_blank" href="https://www.github.com/jahopp23">View More on GitHub</Button>

</Card.Text>
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
