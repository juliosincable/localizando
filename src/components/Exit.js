import React, {Component} from 'react';
import fire from '../fire';

import '../App.css';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class Exit extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
        <div className="App">
            <Container Fluid>
            <Row>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}>    
            
            <div>
                <h1>You are home!</h1>
                <Button variant="success" onClick={this.logout}>Logout</Button>{' '}
                
            </div>
            
            
            </Col>
            </Row>
        
        <Row>
        <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
        {/*  */}
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
    
  
    <Button variant="outline-success" type="submit">Search
      Submit
    </Button>
    
  </Form>
  
  </Col>
 
  
  
  
  
  <Col xs={12} sm={4} md={4} lg={4} xl={4}>
  
  
  </Col>
    </Row>
  
    
   
    </Container> 
   
          </div>
         
  
  
  





        )
    }
}

export default Exit;