import React, {Component} from 'react';
import fire from '../fire';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import logo from './logo.svg'

import '../App.css';





class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

            let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" onClick={this.login} value="Enter" />) : 
            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)
            
            

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

<div className="form_block">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />

                        {submitBtn}
                    </form>
                    {login_register}
                </div>
            </div>


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
            
</div>
            
        )
    }
}

export default Login;