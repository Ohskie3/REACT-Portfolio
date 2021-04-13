import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <h1 className="contactMe">Contact Me</h1>
      <Row className="contactMe">
        <Col xs="6">
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
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Contact