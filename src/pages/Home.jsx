import React from 'react'
import HeroSlider from '../component/UI/HeroSlider';
import Helmet from '../component/Helmet/Helmet';
import AboutSection from '../component/UI/AboutSection';
import Testimonial from "../component/UI/Testimonial";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from '../component/UI/BecomeDriverSection'
import ServicesList from '../component/UI/ServicesList';


 
 const Home = () => {
   return (
     

    <Helmet title="Home">
    <section className="p-0 hero_slider-section ">
      <div>
      <HeroSlider/>
      </div>
    </section> 
    <div>
    <AboutSection/>
    </div>
    <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      
    <BecomeDriverSection />

    <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
          </Container> 
      </section>
     

  </Helmet>
  
   );
 };
 
 export default Home;
 
