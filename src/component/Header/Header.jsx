 
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';
import "../../Styles/Header.css";

const navLinks =[
  {
    path:"/home",
    display: "Home",
  },
  {
    path:"/about",
    display: "About",
  },
  {
    path:"/cars",
    display: "Cars",
  },
   
  {
    path:"/contact",
    display: "Contact",
  },
   
];




const Header = () => {
  return (
  <header className='header'>
    <div className='header_top'>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="header_top_left">
              <span>Need Help?</span>
              <span className="header_top_help">
              <i class="ri-phone-fill"></i>078-8958083
              </span>
            </div>
          </Col>

          <Col lg='6' md='6' sm='6'>
            <div className="header_top_right  d-flex align-items-center justify-content-end gap-4">
              <Link to='/signup'> 
                <i class="ri-login-box-line">Login</i>
                </Link>

              <Link to='/register'> 
                <i class="ri-user-line">Register</i>
                </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
                    {/*header middele*/}

    <div className="header_middle">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
            <div className='logo'>
              <h1><Link to='/home' className="d-flex align-items-center gap-2">
              <i class="ri-car-line"></i>
              <span>Rent a car<br/>Service</span>
              </Link>
              </h1>
            </div>
          </Col>

          <Col lg='3'md='3' sm='4'>
          <div className="header_location d-flex align-items-center gap-2">
              <span><i class="ri-earth-fill"></i></span>
          
          <div className="header_location_content ">
                <h4>Sri Lanka</h4>
                <h6>Car Rental Store,colombo7</h6>
              </div>
            </div> 
          </Col>

          <Col lg='3'md='3' sm='4'>

            <div className="header_location d-flex align-items-center gap-2">
              <span><i class="ri-time-line"></i></span>
              <div className="header_location_content">
                <h4>Sunday to Friday</h4>
                <h6>9am - 7pm</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

                 {/*main navigate*/}
    <div className="main_navbar">
      <Container>
        <div className="navigation_wrapper d-flex align-items-center
        justify-content-between">
          <span className="mobile_menu">
          <i class="ri-menu-line"></i>
          </span>

          <div className="navigation">
            <div className="menu">
                {
                  navLinks.map((item,index)=>(
                      <NavLink to={item.path} className='nav_item'key={index} >{item.display}</NavLink>
                  ))
                }

            </div>
          </div>
        </div>
      </Container>
    </div>


  </header>
    
)};


export default Header;
