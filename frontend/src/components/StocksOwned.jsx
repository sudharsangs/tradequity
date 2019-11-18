import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import DatePicker from 'react-date-picker';
import swal from "sweetalert";
import Modal from "react-modal";
import Validation from 'react-validation';



export default class Manage extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeCount = this.onChangeCount.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeMarket = this.onChangeMarket.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logChange = this.logChange.bind(this); 
    this.handleEdit = this.handleEdit.bind(this);
    
    


    this.state = {
      company: '',
      symbol: '',
      count: '',
      cost: '',
      currency: '',
      date: new Date(),
      market: '',
      sno: '',
      details: [],
      modalIsOpen: false
    }
  }

  onChangeCompany(e){
    this.setState({
      company: e.target.value
    })
  }

  onChangeCost(e) {
    this.setState({
      cost: e.target.value
    })
  }

  onChangeSymbol(e) {
    this.setState({
      symbol: e.target.value
    })
  }

  

  onChangeCurrency(e) {
    this.setState({
      currency: e.target.value
    })
  }

  onChangeMarket(e) {
    this.setState({
      market: e.target.value
    })
  }

  onChangeDate = date => this.setState({ date })

  onChangeCount(e) {
    this.setState({
      count: e.target.value
    })
  }
 

  getPickerValue = (e) => {
    console.log(e);
    this.setState({
      date: e.target.value
    })
  }

  openModal(user) {
    this.setState({
        modalIsOpen: true,
        company: user.company,
        symbol: user.symbol,
        count: user.count,
        cost: user.cost,
        currency: user.currency,
        date: user.date,
        market: user.market,
        
    });
  }

  closeModal() {
    this.setState({
        modalIsOpen: false
    });
}

logChange(e) {
  this.setState({
      [e.target.name]: e.target.value 
  });
}

handleEdit(event) {
  //Edit functionality
  event.preventDefault()
  var data = {
      company: this.state.company,
      symbol: this.state.symbol,
      count: this.state.count,
      cost: this.state.count,
      currency: this.state.currency,
      date: this.state.date,
      market: this.state.market,
      sno: this.state.sno
  }
  
  const encodeForm = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
  }

  axios.post('http://localhost:4000/edit', encodeForm(data))
        
          .then(function (response) {
          if (response.data === 300)
          {
          swal({
            title: "Stock Updating Failed",
            text: "          ",
            icon: "error",
            timer: 2000,
            button: false
          })
          

          }
          else
          {
            swal({
              title: "Stock Updated Successfully.",
              text: "           ",
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
  
deleteMember(member){
  let self = this;
  var data = {
      id: member.sno
  }
  const encodeForm = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
  }

  axios.post('http://localhost:4000/delete', encodeForm(data))
        .then(function(response){
         self.setState({
         details: response.data.reverse()
        })
          .then(function (response) {
          if (response.data === 300)
          {
          swal({
            title: "Stock Deleting Failed",
            text: "          ",
            icon: "error",
            timer: 2000,
            button: false
          })
          

          }
          else
          {
            swal({
              title: "Stock Deleted Successfully.",
              text: "           ",
              icon: "success",
              timer: 2000,
              button: false
            })
            
          }
      })
    })
      
      .catch(function (error) {
          console.log(error);
  });
}

  

  onSubmit(e) {
    e.preventDefault();
    let self=this;

    const data = {
      company: this.state.company,
      symbol: this.state.symbol,
      count: this.state.count,
      cost: this.state.cost,
      currency: this.state.currency,
      market: this.state.market,
      date: this.state.date
    }
   

    const encodeForm = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
    }

    axios.post('http://localhost:4000/stocks', encodeForm(data))
          .then(function(response){
            self.setState({
              details: response.data.reverse()
            })
            .then(function (response) {
            if (response.data === 300)
            {
            swal({
              title: "Stock Adding Failed",
              text: "          ",
              icon: "error",
              timer: 2000,
              button: false
            })
            

            }
            else
            {
              swal({
                title: "Stock Added Successfully.",
                text: "           ",
                icon: "success",
                timer: 2000,
                button: false
              })
              
            }
        })
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
          <form method="post" onSubmit={this.onSubmit} action="http://localhost:4000/stocks">
            <p className="h5 text-center mb-4">Add Stocks Owned by you</p>
            <div className="grey-text">
              <MDBInput

                label="Company"
                icon="building"
                type="text"
                group
                error="wrong"
                success="right"
                name="company"
                title="Name cannot contain numbers"
                value={this.state.company}
                onChange={this.onChangeCompany}
                required


              />
              <MDBInput
                label="Symbol"
                icon="chart-line"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="symbol"
                title="Please enter stock name"
                value={this.state.symbol}
                onChange={this.onChangeSymbol}
                required
              />
              Eg. AAPL for Apple Inc.
                  GOOGL for Alphabet Inc.
                  BAJAJ-AUTO for Bajaj Automobiles

              <MDBInput
                label="No. Of Stocks"
                icon="sort-numeric-down"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="count"
                title="Please enter number of stocks"
                value={this.state.count}
                onChange={this.onChangeCount}
                required
              />

              <MDBInput 
                label="Market"
                icon="money-check"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="market"
                title="Please enter market name"
                value={this.state.market}
                onChange={this.onChangeMarket}
              />
              Eg. NYSE,NASDAQ,NSE,BSE
              <MDBInput
                label="Price When stock was bought"
                icon="money-bill-wave"
                type="text"
                pattern="[0-9]{1,}"
                title="Cost cannot be in alphabets"
                validate
                error="wrong"
                success="right"
                name="cost"
                value={this.state.cost}
                onChange={this.onChangeCost}
                required

              />

              <MDBInput
                label="Currency"
                icon="rupee-sign"
                type="text"
                pattern="[A-Z]{3}"
                title="Currency cannot be in numbers"
                validate
                error="wrong"
                success="right"
                name="currency"
                value={this.state.currency}
                onChange={this.onChangeCurrency}
                required
               />

               Eg. USD for US Dollars INR for Indian Rupees
              
                <br/>
                <br/>
               <MDBIcon icon="calendar" className="font-weight-bold"/>
               <h2 className="font-weight-bold">Date When Stock Was Bought</h2>
               <br/>

               <DatePicker
                onChange={this.onChangeDate}
                value={this.state.date}
                maxDate={new Date()}
                format="dd/MM/yyyy"
                />

              


              

            </div>
            <div className="text-center">
              <MDBBtn gradient="purple" type="submit">Add Stock</MDBBtn>
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
                          <th>Company</th>
                          <th>Symbol</th>
                          <th>No. Of Stocks</th>
                          <th>Cost</th>
                          <th>Total</th>
                          <th>Currency</th>
                          <th>Date And Time</th>
                          <th>Market</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                  {this.state.details.map(id =>
                      <tr key={id}>
                      <td>{id.company} </td>
                      <td>{id.symbol}</td>
                      <td>{id.count}</td>
                      <td>{id.cost}</td>
                      <td>{id.cost*id.count}</td>
                      <td>{id.currency}</td>
                      <td>{id.date}</td>
                      <td>{id.market}</td>
                      <td><MDBBtn outline color="danger" size="sm" onClick={() => this.deleteMember(id)}>Delete</MDBBtn></td>
                      </tr>
                  )}
                  </tbody>
              </table>
          </div>
      </div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit" >
                   <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
        <MDBCardBody>
          <form method="post" onSubmit={this.handleEdit} action="http://localhost:4000/edit">
            <p className="h5 text-center mb-4">Update the stock</p>
            <div className="grey-text">
              <MDBInput

                label="Company"
                icon="building"
                type="text"
                group
                error="wrong"
                success="right"
                name="company"
                placeholder={this.state.company}
                title="Name cannot contain numbers"
                value={this.state.company}
                onChange={this.onChangeCompany}
                required


              />
              <MDBInput
                label="Symbol"
                icon="chart-line"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="symbol"
                placeholder={this.state.symbol}
                title="Please enter stock name"
                value={this.state.symbol}
                onChange={this.onChangeSymbol}
                required
              />
              Eg. AAPL for Apple Inc.
                  GOOGL for Alphabet Inc.
                  BAJAJ-AUTO for Bajaj Automobiles

              <MDBInput
                label="No. Of Stocks"
                icon="sort-numeric-down"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="count"
                placeholder={this.state.count}
                title="Please enter number of stocks"
                value={this.state.count}
                onChange={this.onChangeCount}
                required
              />

              <MDBInput 
                label="Market"
                icon="money-check"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="market"
                placeholder={this.state.market}
                title="Please enter market name"
                value={this.state.market}
                onChange={this.onChangeMarket}
              />
              Eg. NYSE,NASDAQ,NSE,BSE
              <MDBInput
                label="Price When stock was bought"
                icon="money-bill-wave"
                type="text"
                pattern="[0-9]{1,}"
                title="Cost cannot be in alphabets"
                validate
                error="wrong"
                success="right"
                placeholder={this.state.cost}
                name="cost"
                value={this.state.cost}
                onChange={this.onChangeCost}
                required

              />

              <MDBInput
                label="Currency"
                icon="rupee-sign"
                type="text"
                pattern="[A-Z]{3}"
                title="Currency cannot be in numbers"
                validate
                error="wrong"
                success="right"
                name="currency"
                placeholder={this.state.currency}
                value={this.state.currency}
                onChange={this.onChangeCurrency}
                required
               />

               Eg. USD for US Dollars INR for Indian Rupees
              
                <br/>
                <br/>
               <MDBIcon icon="calendar" className="font-weight-bold"/>
               <h2 className="font-weight-bold">Date When Stock Was Bought</h2>
               <br/>

               <DatePicker
                onChange={this.onChangeDate}
                value={this.state.date}
                maxDate={new Date()}
                format="dd/MM/yyyy"
                /> 
              </div>
            <div className="text-center">
              <MDBBtn gradient="purple" type="submit">Update Stock</MDBBtn>
            </div>
          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>        

      </Modal>
      </div>
  );
}
}
