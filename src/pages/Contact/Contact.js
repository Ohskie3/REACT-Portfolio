import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap'
import './Contact.css'

const Contact = () => {
  return (
    <>
      
      <Card className="contactCard">
        <CardHeader>
          <h1>Contact Me</h1></CardHeader>
      <Row className="contactMe">
        <Col xs="4">
          <Form>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input type="text" name="name" id="exampleName" placeholder="Name..." />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="Email" name="Email" id="exampleEmail" placeholder="Email..." />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
      </Card>
    </>
  )
}

export default Contact