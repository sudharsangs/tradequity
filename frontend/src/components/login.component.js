import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class LogIn extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: ''
      }
    }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const Login = {
        email: this.state.email
      }
  
      console.log(Login);
  
     /* axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));*/
  
      this.setState({
        email: ''
      })
    }

    render(){
        return (
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
              <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h5 text-center mb-4">Log In</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn gradient="purple" rounded>
                      Login
                    </MDBBtn>
                 </div>
                </form>
                </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
          
        );
      }
      }