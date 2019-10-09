import React,{ Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem, MDBBadge } from 'mdbreact';

export default class Predict extends Component
{
    render(){
        return (
            <div>
             <br/>
            <br/>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                <h2><MDBBadge color="warning">Choose from below to see predict share price</MDBBadge></h2>
                <br/>
                <br/>
                    
                        <MDBDropdown>
                             <MDBDropdownToggle caret color="secondary" >
                               Predict Share Price
                             </MDBDropdownToggle>
                             <MDBDropdownMenu basic >
                              <MDBDropdownItem>Maruti Suzuki</MDBDropdownItem>
                              <MDBDropdownItem>Adani Gas Limited</MDBDropdownItem>
                              <MDBDropdownItem>Allahabad Bank</MDBDropdownItem>
                              <MDBDropdownItem>Bajaj Auto Limited</MDBDropdownItem>
                             </MDBDropdownMenu>
                        </MDBDropdown>
                        
                </MDBCol>
               </MDBRow>
               </MDBContainer>
               </div>
        )
    }
}
