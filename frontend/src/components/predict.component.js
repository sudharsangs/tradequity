import React,{ Component } from 'react';
import './style.css'

export default class Predict extends Component
{
    render(){
        return (

          <div class="col-sm-12 col-md-12" style="padding: 70px 0 0 70px;">
          <div class="row">
              <div class="col-sm-4 col-md-4">
                  <div id="custom-search-form" class="form-search form-horizontal">
                      <div class="input-group">
                          <input id="company" type="text" class="form-control" placeholder="Search for..." />
                          <span class="input-group-btn">
                              <button id="getCompany" class="btn btn-default" style="z-index: 99;" type="submit">
                                  <i class="fa fa-search"></i>
                              </button>
                          </span>
                      </div>
                  </div>
                  <div>
                      <table class="table">
                          <thead>
                              <tr>
                                  <th>Company</th>
                                  <th>Symbol</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Google</td>
                                  <td>GOOGL</td>
                              </tr>
                              <tr>
                                  <td>Apple</td>
                                  <td>AAPL</td>
                              </tr>
                              <tr>
                                  <td>Microsoft</td>
                                  <td>MSFT</td>
                              </tr>
                              <tr>
                                  <td>Amazon</td>
                                  <td>AMZN</td>
                              </tr>
                              <tr>
                                  <td>Tesla</td>
                                  <td>TSLA</td>
                              </tr>
                              <tr>
                                  <td>Dow Jones Industrial Average</td>
                                  <td>DIA</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="cnn"></div>
              </div>
              <div class="col-sm-8 col-md-8">
                  <div style="width:90%;">
                      <canvas id="canvas"></canvas>
                  </div>
              </div>
          </div>
      </div>
            
             
        );
    }
}
