import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap'
import './Contact.css'
import github from '../../components/images/githublogo.png'
import linkedin from '../../components/images/linkedinlogo.png'
import instagram from '../../components/images/instagram.png'
import facebook from '../../components/images/facebook.png'
import Navbar from '../../components/Navbar'




const Contact = () => {

  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/kyle-ohlwiler-b3b34942/', '_blank')
  }
  const handleGithub = () => {
    window.open('https://github.com/Ohskie3', '_blank')
  }
  const handleInstagram = () => {
    window.open('https://www.instagram.com/ohskie3/', '_blank')
  }
  const handleFacebook = () => {
    window.open('https://www.facebook.com/kyle.ohlwiler', '_blank')
  }
  return (
    <>
      <Navbar />
      
      <Card className="contactCard">
        <CardHeader>
          <h1>Contact Me</h1></CardHeader>
      <Row className="contactMe">
        <Row>
          <h2>Email:</h2>
          <h4>kyleohlwiler@gmail.com</h4>
        </Row>
        <hr/>
        <Row>
          <h2>Phone:</h2>
          <h4>(949) 547-1111</h4>
        </Row>
        <hr/>
        <Row>
          <div>
          <img src={linkedin} className="linkedin" onClick={handleLinkedin}/>
          <img src={github} className="github" onClick={handleGithub}/>
          <img src={instagram} className="instagram" onClick={handleInstagram}/>
          <img src={facebook} className="facebook" onClick={handleFacebook}/>
          </div>
        </Row>
      </Row>
      </Card>
         
    </>
  )
}

export default Contact