import React, { Component } from 'react';
//import axios from 'axios';
//import './user-style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';


export default class SignUp extends Component {
  constructor(props) {
    super(props);

   this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: ''
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email
    }

    console.log(user);

    /*axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));*/

    this.setState({
      email: ''
    })
  }

 

  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
        <MDBCardBody>
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="name"
              
              
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email"
              />
             <ReactPhoneInput 
                 defaultCountry={'in'} 
                 value={this.state.phone}
              />
              <MDBInput
                label="Password"
                icon="lock"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email_again"
              />
              <MDBInput
                label="Confirm Password"
                icon="exclamation-triangle"
                group
                type="password"
                validate
                name="password"
              />
              <MDBContainer className="mt-5">
                <MDBInput 
                 label="Male" 
                 type="radio"
                 icon="male" />
                <MDBInput 
                 label="Female" 
                 type="radio"
                 icon="female" />
                <MDBInput  
                 label="Rather Not Specify" 
                 type="radio"
                 icon="transgender" />
    
              </MDBContainer>
            </div>
            <div className="text-center">
              <MDBBtn gradient="purple" rounded>Sign Up</MDBBtn>
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