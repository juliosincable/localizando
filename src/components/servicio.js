import React from 'react';
import '../App.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



function Servicio() {
  return (
    <div className="App">

<Container fluid>
      <Row>
{/*  */}
      <Col xs={0} sm={4} md={4} lg={4} xl={4}>
      
      </Col>

      <Col xs={12} sm={4} md={4} lg={4} xl={4}>
      <Form>
{/*  */}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Razón social</Form.Label>
    <Form.Control type="name" placeholder="Nombre de la empresa o servicio" />
      </Form.Group>
{/*  */}
      <Form.Group controlId="formBasicPassword">
    <Form.Label>RIF</Form.Label>
    <Form.Control type="password" placeholder="Numero de información fiscal o cédula" />
  </Form.Group>
{/*  */}
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Dirección</Form.Label>
    <Form.Control type="name" placeholder="Nombre de la empresa o servicio" />
      </Form.Group>
{/*  */}
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="name" placeholder="Nombre de la empresa o servicio" />
      </Form.Group>
{/*  */}
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="name" placeholder="Nombre de la empresa o servicio" />
      </Form.Group>
{/*  */}
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Categoría</Form.Label>
    <Form.Control type="name" placeholder="Nombre de la empresa o servicio" />
      </Form.Group>
{/*  */}
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
{/*  */}
  <Button variant="outline-success" type="submit">Search
    Submit
  </Button>
  

  <Form.Switch>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch"
  />
</Form.Switch>



   

</Form>
{/*  */}
     </Col>
     <Col xs={0} sm={4} md={4} lg={4} xl={4}>
      
      </Col>
     </Row>
     </Container>
     <br />
     
    </div>
  );
}

export default Servicio;
