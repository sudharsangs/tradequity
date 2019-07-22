import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class LogIn extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: ''
      }
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username
      }
  
      console.log(user);
  
      axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
  
      this.setState({
        username: ''
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
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
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