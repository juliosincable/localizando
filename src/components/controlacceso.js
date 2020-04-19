import React from 'react';
import '../App.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



function Controlacceso() {
  return (
    <div className="App">
                     
      <Container>
      
      <Row>
      {/* adyacente al formulario  */}
      <Col xs={12} sm={8} md={8} lg={8} xl={8}></Col>
    
      {/* formulario de ingreso de usuarios  */}
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="outline-success" type="submit">Search
    Submit
  </Button>
</Form>
      </Col>
      
    
</Row>
</Container>
<br />
                         </div>
    
  );
}

export default Controlacceso;
