 import React from 'react'
import CarList from '../component/UI/CarList'
import CarData from '../Data/CarData'
import { Container, Row, Col } from 'reactstrap';
import "../Styles/CarListing.css"
import Helmet from '../component/Helmet/Helmet'
import CommonSection from   '../component/UI/CommonSection';
 
 const CarListing = () => {
   return (
    
<Helmet title="Cars">
<CommonSection title="Car Listing" />
    <section>
       
      <Container>
        <Row>
          <Col lg="12">
            <div className="  d-flex align-items-center gap-3 mb-5">
            <span className=" d-flex align-items-center gap-2">
                <div className="text_car"><b>Rent a Car</b></div> 
               </span>
              </div>
          </Col>
             
 
          {CarData.map((item) => (
            <CarList item={item} key={item.id} />
          ))}
          </Row>
       </Container>
      
     </section>  
     
     </Helmet>
   );
 };
 
 export default CarListing
 
