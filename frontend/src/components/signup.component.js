import React, { Component } from 'react';
//import axios from 'axios';
//import './user-style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


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
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="name"
              
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email"
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email_again"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
                name="password"
              />
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