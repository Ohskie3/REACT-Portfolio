import React from 'react'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import pic from './withhayley.jpg'
import './Home.css'
import resume from './resume.pdf'




const Home = () => {
  return (
    <>
      <Card className="profileCard">
        <CardBody>
          <CardTitle tag="h1">Kyle Ohlwiler</CardTitle>
        </CardBody>
        <img width="100%" src={pic} alt="Card image cap" id="myPic"/>
        <CardBody>
          <CardText className="cardText">My name is Kyle Ohlwiler. I live in Rancho Santa Margarita, CA. I received a Bachelor's degree from Brigham Young University (BYU). I am currently studying in a coding bootcamp at the University of California Irvine (UCI) to become a full-stack web developer. I look forward to the education procress and look forward to starting a new career as a web developer.</CardText>
          <div className="cardLinks">
          <CardLink href="https://www.linkedin.com/in/kyle-ohlwiler-b3b34942/" target="_blank">LinkedIn</CardLink>
          <CardLink href="https://github.com/Ohskie3" target="_blank">GitHub</CardLink>
          <CardLink href={resume} target="_blank">My Resumé</CardLink>
          </div>
        </CardBody>
      </Card>
    
    </>
  )
}

export default Home