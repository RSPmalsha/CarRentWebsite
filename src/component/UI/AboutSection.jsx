import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../Styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12" className="position-relative">
            <div className="about_section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section_title">Welcome to car rent service</h2>
              <p className="section_description">
                Welcome to Car Rental Service, your trusted partner for all your transportation needs. 
                With a fleet of modern and well-maintained vehicles, we offer flexible rental options to suit every journey, whether it's a business trip, a family vacation, or a weekend getaway. 
                Our commitment to exceptional customer service, competitive pricing, and hassle-free booking ensures that you have a smooth and enjoyable experience on the road. Drive with confidence and convenience with Car Rental Service Name. Your adventure starts here!
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className='ri-checkbox-circle-line'></i> Car Search and Booking
                </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="section_description d-flex align-items-center gap-2">
                  <i className='ri-checkbox-circle-line'></i> Vehicle Information
                </p>
              </div> 
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className='ri-checkbox-circle-line'></i>Rental Management
                </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="section_description d-flex align-items-center gap-2">
                  <i className='ri-checkbox-circle-line'></i> Pricing and Payment
                </p>
              </div>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className='ri-checkbox-circle-line'></i> Pickup and Drop-off
                </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="section_description d-flex align-items-center gap-2">
                  <i className='ri-checkbox-circle-line'></i> Customer Support
                </p>
              </div>
            </div>
            <div className="about_img">
              <img src={`${process.env.PUBLIC_URL}/images/mg4.png`} alt="mg4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
