import React,{ Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem, MDBBadge } from 'mdbreact';
import _ from 'lodash';
import axios from 'axios';
import StockList from './stocklist.component';

const alpha = require('alphavantage')({ key: '21KD3XLAL6YOAOAD' });


export default class LivePrice extends Component {

    constructor() {
        super();
    
        this.state = {
          stocks: [],
          term: null,
          value: ''
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.setState({
          value: e.target.value
        });
      }
    
      handleClick(e) {
        if(e) e.preventDefault();
        this.setState({
          value: '',
          term: this.state.value
        });
    
        let term = this.state.value;
        const key = '21KD3XLAL6YOAOAD';
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=NSE:${term}&outputsize=full&apikey=${key}`;
        axios.get(url)
        .then(res => {
          console.log(res.data);
          let stocks = _.flattenDeep( Array.from(res.data['Stock Quotes']).map((stock) => [{symbol: stock['1. symbol'], price: stock['2. price'], volume: stock['3. volume'], timestamp: stock['4. timestamp']}]) );
          console.log(stocks);
          this.setState((state, props) => {
            return {
              ...state,
            stocks
            }
          })
        })
        .catch(error => console.log(error))
      }


render(){
    let stocks = this.state.stocks;
    const value = this.state.value;

    return (
        <div>
             <br/>
            <br/>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                <h2><MDBBadge color="warning">Choose from below to see live share price</MDBBadge></h2>
                <br/>
                <br/>
                    
                        <MDBDropdown>
                             <MDBDropdownToggle caret color="secondary" >
                               Live Share Price
                             </MDBDropdownToggle>
                             <MDBDropdownMenu basic value={this.state.selectValue} 
                               onChange={this.handleChange} >
                              <MDBDropdownItem>Maruti Suzuki</MDBDropdownItem>
                              <MDBDropdownItem>Adani Gas Limited</MDBDropdownItem>
                              <MDBDropdownItem>Allahabad Bank</MDBDropdownItem>
                              <MDBDropdownItem>Bajaj Auto Limited</MDBDropdownItem>
                             </MDBDropdownMenu>
                        </MDBDropdown>
                        
                </MDBCol>
               </MDBRow>

             </MDBContainer>
             <div className="App">
                 <StockList stockItems={ this.state.stocks }/>
      </div>

        </div>
       
    );
}
}