import React from 'react';
import '../App.css';
// eslint-disable-next-line
import { Form } from 'react-bootstrap';
// eslint-disable-next-line
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



function Entrando() {
  return (
    <div className="App">
                     
      <Container>
      
      <Row>
      {/* adyacente al formulario  */}
      <Col xs={12} sm={8} md={8} lg={8} xl={8}></Col>
    
      {/* formulario de ingreso de usuarios  */}
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
      
      </Col>
      
    
</Row>
</Container>
<br />
                         </div>
    
  );
}

export default Entrando;
