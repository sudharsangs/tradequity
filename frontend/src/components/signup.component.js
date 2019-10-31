import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer,MDBFormInline, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBBadge } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import swal from "sweetalert";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    //this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePassword_Again=this.onChangePassword_Again.bind(this);
    this.onClick=this.onClick.bind(this);
    






    this.state = {
      email: '',
      password: '',
      name: '',
      gender: '',
      phone: '',
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
      phone: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

/*  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  } */

  

  onClick = nr => () => {
    this.setState({
      gender: nr
    });
  };

  onSubmit(e) {
    e.preventDefault();
    


    const data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      gender: this.state.gender,
      phone: this.state.phone
    }
    //console.log(data);

    const encodeForm = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
    }

    axios.post('http://localhost:4000/register', encodeForm(data))
        .then(function (response) {
            console.log(response);
            if (response.data === 200)
            {
            //alert("Data Added successfully.")
            swal({
              title: "Registration Successfull",
              text: "          ",
              icon: "success",
              timer: 2000,
              button: false
            })
            .then(function(){
              window.location.href = "/login"
            })

            }
            else
            {
              //alert("Registration Fail.")
              swal({
                title: "Registration Fail.",
                text: "           ",
                icon: "error",
                timer: 2000,
                button: false
              })
              .then(function(){
                window.location.href = "/signup"
              })
            }
        })
        .catch(function (error) {
            console.log(error);
    });

  }

  render(){
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
        <MDBCardBody>
          <form method="post" onSubmit={this.onSubmit} action="http://localhost:4000/register">
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
                title="Name cannot contain numbers"
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
                title="Please enter a valid email address"
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
                name="phone"
                type="tel"
                pattern="[0-9]{10}"
                title="Please enter a valid Phone Number of 10 digits"
                value={this.state.phone}
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be same as the previous field"
                value={this.state.password_again}
                onChange={this.onChangePassword_Again}
                required
              />
              <h5><MDBBadge color="secondary">Gender</MDBBadge></h5>
              <MDBFormInline>
        <MDBInput
          onClick={this.onClick('M')}
          checked={this.state.radio === 1 ? true : false}
          label='Male'
          type='radio'
          id='radio1'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick('F')}
          checked={this.state.radio === 2 ? true : false}
          label='Female'
          type='radio'
          id='radio2'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick('O')}
          checked={this.state.radio === 3 ? true : false}
          label='Other'
          type='radio'
          id='radio3'
          containerClass='mr-5'
        />
      </MDBFormInline>


            </div>
            <div className="text-center">
              <MDBBtn gradient="purple" type="submit">Sign Up</MDBBtn>
              
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
