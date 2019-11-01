import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {

    constructor(){
        super() 
          this.state = {
            data: []
          }
        
      }

    componentDidMount() {

        axios({
                method: "post",
                url: 'http://localhost:4000/admin',
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
            .then(response => {
                console.log(response);
                if (response) {
                    this.setState({ data: response });
                }
            })
            .catch(error => console.log(error));
    }
    render(){
        return(
            <table>
            <tbody>{this.state.data.map(function(item, key) {
             
                  <tr key = {key}>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                  </tr>
             
             })}</tbody>
       </table>
        );
    }

}