import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='mt-5 bg-light p-5'>
    
        <Row>
          <Col sm={12} md={4} lg={4}>
            <h5>Info</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h5>Policy</h5>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
            </ul>
          </Col>
        </Row>
      
    </footer>
  );
}

export default Footer;
