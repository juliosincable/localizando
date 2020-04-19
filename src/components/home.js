import React from 'react';
import '../App.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import logo from './logo.svg'




function Home () { 
  return (
       
       <div className="App">
         <Container fluid>
           
      
<Row>

      
      <Col xs={12} sm={4} md={4} lg={4} xl={4}>
      
      <br /><br />
  <img src={logo} width="100px" height="100px" alt="logo" />
      </Col>
      
      <Col xs={12} sm={4} md={4} lg={4} xl={4}>
     
  Nosotros: 
 <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Col>
        

<Col xs={12} sm={4} md={4} lg={4} xl={4}>

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="email" placeholder="¿Que buscas?" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
{/*  */}
<Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="¿Que buscas?" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="outline-success" type="submit">Search
    Submit
  </Button>
  
</Form>

<br />




</Col>
  </Row>


 
  <Row>
  
  <Col><h6>
  Nosotros: 
  </h6><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
  <Col><h6>
  Nosotros: 
  </h6><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col> 
  <Col><h6>
  Nosotros: 
  </h6><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col>
  <Col><h6>
  Nosotros: 
  </h6><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Col> 
  
  </Row>
  

  <br />
  <Row>
  <Col>
  <h6>
  Derechos Reservados Localizando, C. A. 
  </h6>
    </Col>
  </Row>

  
  </Container> 
  <br />
        </div>
        );


   
}

export default Home;
