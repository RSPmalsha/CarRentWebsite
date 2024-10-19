
import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import "../../Styles/Footer.css"


const quickLinks= [
  {
    path:'/about',
    display:'About',
  },
  {
    path:'#',
    display:'Privacy Policy',
  },
  {
    path:'/cars',
    display:'Car Listing',
  },
  {
    path:'/blogs',
    display:'BLogs',
  },
  {
    path:'/contact',
    display:'Contact',
  },
  
];

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()


  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='12'>
        <div className='logo footer_logo'>
              <h1><Link to='/home' className="d-flex align-items-center gap-2">
              <i class="ri-car-line"></i>
              <span>Rent a car<br/>Service</span>
              </Link>
              </h1>
            </div>
            <p className="footer_logo_content">
              this is footer of this page 
              this is footer of this page 
              this is footer of this page 
              this is footer of this page 
              this is footer of this page 
            </p>
        </Col>

        <Col lang='3' md='4' sm='12'>
        <div className="mb-4">
          <h5 className="footer_link_title">Quick Links</h5>
          <ListGroup>
            {
              quickLinks.map((item,index)=>(
                <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </div>
        </Col> 

        <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer_link_title mb-4">Head Office</h5>
                <p className="office_info">
                  No.34/A Galle Road, Colombo 7
                </p>
                <p className="office_info">
                  phone: +94 788958083
                </p>
                <p className="office_info">
                   Email: CarRentalService@gmail.com
                </p>
                <p className="office_info">
                  Office Time: 9am - 7pm
                </p>
              
            </div>
        </Col>

        <Col lg='12'>
        <div className="footer_bottom">
          <p className="section_description  d-flex
          align-items-center justify-content-center gap-1 pt-2">
            <i class="ri-copyright-line"></i>Copyright {year},
            Developed by Malsha Kavshan. All right reserves..
          </p>
        </div>
        </Col>
      </Row>
    </Container>
  </footer>
    
  
};

export default Footer
