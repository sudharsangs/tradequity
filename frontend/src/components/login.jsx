import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


      
    
export default class LogIn extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
         email: '',
         password: ''
      }
    }
    state = {
      email: {
        value: "",
        valid: false
      },
      password: {
        value: "",
        valid: false
      }
      };


      changeHandler = event => {
        this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
      };
    



    onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const data = {
        email: this.state.email,
        password: this.state.password,
      }
  
      //console.log(data);

      const encodeForm = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
      }
       
      axios.post('http://localhost:4000/login', encodeForm(data), {headers: {'Accept': 'application/json'}})
          .then(function (response) {
              console.log(response);
              if (response.data === 200)
              {
              //alert("Successfully Login")
              swal({
                title: "Login Successfull!",
                text: "     ",
                icon: "success",
                timer: 2000,
                button: false
              })
              .then(function(){
                window.location.href = "/mys"
                sessionStorage.setItem('usertoken',response.data)
              })
              }
              else if(response.data === 300)
              {
                // alert("Password incorrect")
                swal({
                  title: "Password incorrect",
                  text: "     ",
                  icon: "error",
                  timer: 2000,
                  button: false
                })
              }
              else
              {
                // alert("Account does not exist");
                swal({
                  title: "Account does not exist",
                  text: "     ",
                  icon: "info",
                  timer: 2000,
                  button: false
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
              <form method="post" onSubmit={this.onSubmit} action="http://localhost:4000/login">
                  <p className="h5 text-center mb-4">Log In</p>
                  <div className="grey-text">
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
                      label="Password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      required
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn gradient="purple" type="submit">Login</MDBBtn>
                 </div>
                </form>
                If you are an admin login <Link to="/admin">here</Link>
                </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
          
        );
      }
      }