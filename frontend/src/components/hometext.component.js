import React,{Component} from 'react';

class Home extends Component 
{
    render(){
        return (
           <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
              <MDBCard>
              <MDBCardBody>
                  <h1>Tradequity Trading App</h1>
                  <h2>A one stop solution to manage your stocks</h2>
                  <p>Don't worry about privacy. Admins don't have have any acceess to the data you store in our site</p>
                  <h2>#We Support Privacy</h2>
               </MDBCardBody>
               </MDBCard>
             </MDBCol>
            </MDBRow>
            </MDBContainer>
        )
    }
}

export default Home;
