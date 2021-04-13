import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Project1 from '../../components/Project1'
import Project2 from '../../components/Project2'
import Budget from '../../components/Budget'
import './Portfolio.css'



const Portfolio = () => {
  return (
    <>

      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project1 />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project2 />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Budget />
        </Col>
      </Row>

    {/* <div className="container">
      <Row xs="3">
        <Project1 />
        <Project2 />
        <Budget />
      </Row>
    </div> */}
  </>
  )
}

export default Portfolio