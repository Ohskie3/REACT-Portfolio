import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Project1 from '../../components/Project1'
import Project2 from '../../components/Project2'
import Project3 from '../../components/Project3'
import Budget from '../../components/Budget'
import './Portfolio.css'




const Portfolio = () => {
  return (
    <>
      <div className='container'>

      <Row  className="cards">
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project3 />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project2 />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project1 />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Budget />
        </Col>
      </Row>
      </div>

  </>
  )
}

export default Portfolio