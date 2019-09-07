import React, { Component } from 'react';
import axios from 'axios';
//import './user-style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBBadge } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePassword_Again=this.onChangePassword_Again.bind(this);
    this.onClick = this.onClick.bind(this);





    this.state = {
      name: '',
      email: '',
      phno: '',
      password: '',
      gender: '',
      password_again: ''


    }
  }

  onChangePassword_Again(e){
    this.setState({
      password_again: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeNumber(e) {
    this.setState({
      phno: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
  

    const user = {
      email: this.state.email,
      phno: this.state.phno,
      name: this.state.name,
      password: this.state.password,
      gender: this.state.gender
    }

    axios.post('http://localhost:4000/signup', user)
      .then(res => console.log(res.data));
      

    console.log(user);
  }

  onClick() {
    console.log('Success');
    const user = {
      email: this.state.email,
      phno: this.state.phno,
      name: this.state.name,
      password: this.state.password,
      gender: this.state.gender
    }

    axios.post('http://localhost:4000/signup', user)
      .then(res => console.log(res.data));

    
  }
 

  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
        <MDBCardBody>
          <form method="post" onSubmit={this.onSubmit}>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput

                label="Name"
                icon="user"
                type="text"
                group
                error="wrong"
                success="right"
                name="name"
                value={this.state.name}
                onChange={this.onChangeName}
                required
              
              
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
                value={this.state.email}
                onChange={this.onChangeEmail}
                required
              />
              <MDBInput
                label="Phone Number"
                icon="phone-volume"
                group
                validate
                error="wrong"
                success="right"
                name="phno"
                value={this.state.phno}
                onChange={this.onChangeNumber}
                required
              />
              
             
              <MDBInput
                label="Password"
                icon="lock"
                group
                type="password"
                validate
                error="wrong"
                success="right"
                name="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}

              />
              <MDBInput
                label="Confirm Password"
                icon="exclamation-triangle"
                group
                type="password"
                validate
                name="password_again"
                value={this.state.password_again}
                onChange={this.onChangePassword_Again}
                required
              />
              <h5><MDBBadge color="secondary">Gender</MDBBadge></h5>
              <RadioGroup 
              onChange={ this.onChangeGender } 
              horizontal
              value={ this.state.gender}
              required>
              <RadioButton value="male" iconSize={20} name="m" rootColor="#616C6F" pointColor="purple">
              Male
             </RadioButton>
             <RadioButton value="female" iconSize={20} name="f" rootColor="#616C6F" pointColor="purple">
             Female
             </RadioButton>
             <RadioButton value="other" iconSize={20} name="" rootColor="#616C6F" pointColor="purple">
             Others
            </RadioButton>
            </RadioGroup>

              

            </div>
            <div className="text-center">
              <MDBBtn gradient="purple" type="submit" onClick={this.onCLick}>Sign Up</MDBBtn>
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