import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import swal from 'sweetalert';



      
    
export default class Admin extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
         email: '',
         password: '',
         users: [],
         market: [],
         modalIsOpen: false
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

    handleEdit(event) {
      //Edit functionality
      event.preventDefault()
      var data = {
          name: this.state.name,
          email: this.state.email,
          id: this.state.id
      }
      fetch("/users/edit", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          console.log(data)
          if (data === "success") {
              this.setState({
                  msg: "User has been edited."
              });
          }
      }).catch(function(err) {
          console.log(err)
      });
  }

    openModal(user) {
      this.setState({
          modalIsOpen: true,
          name: user.name,
          email: user.email,
          phone: user.phone
      });
    }

    closeModal() {
      this.setState({
          modalIsOpen: false
      });
  }
  
    onSubmit(e) {
      e.preventDefault();
      let self = this;
  
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
       
      axios.post('http://localhost:4000/admin', encodeForm(data), {headers: {'Accept': 'application/json'}})
          .then(function (response)  {
              self.setState({
                users: response.data.reverse()
              })
              if (response.data === 400)
              {              
              swal({
                title: "Account does not exist",
                text: "     ",
                icon: "info",
                timer: 2000,
                button: false
              })
              .then(function(){
                window.location.href = "/details"
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
                  title: "Successfully Login!",
                  text: "     ",
                  icon: "success",
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
          <div>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
              <MDBCard>
              <MDBCardBody>
              <form method="post" onSubmit={this.onSubmit} action="http://localhost:4000/admin">
                  <p className="h5 text-center mb-4">Log In</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Admin Email"
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
                      label="Admin Password"
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
                    <MDBBtn gradient="purple" type="submit">Admin Login</MDBBtn>
                 </div>
                </form>
                </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="container"> 
          <div className="panel panel-default p50 uth-panel">
              <table className="table table-hover">
                  <thead>
                      <tr>
                          <th>User Name</th>
                          <th>User email</th>
                          <th>Phone number</th>
                      </tr>
                  </thead>
                  <tbody>
                  {this.state.users.map(id =>
                      <tr key={id}>
                      <td>{id.name} </td>
                      <td>{id.email}</td>
                      <td>{id.phone}</td>
                      
                      </tr>
                  )}
                  </tbody>
              </table>
          </div>
      </div>
      <div className="container"> 
          <div className="panel panel-default p50 uth-panel">
              <table className="table table-hover">
                  <thead>
                      <tr>
                          <th>Market</th>
                          <th>No. Of Stocks</th>
                      </tr>
                  </thead>
                  <tbody>
                  {this.state.market.map(id =>
                      <tr key={id}>
                      <td>{id.market} </td>
                      <td>{id.qty}</td>
                      
                      </tr>
                  )}
                  </tbody>
              </table>
          </div>
      </div>
      </div>
          
          
          
        );
      }
      }