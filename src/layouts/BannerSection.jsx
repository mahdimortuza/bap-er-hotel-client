import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const BannerSection = () => {
  return (
    <div className="banner-section mt-5">
    
        <Row>
          <Col md={6}>
            <Image src="https://media.gettyimages.com/id/155388199/photo/young-chef-tasting-soup.jpg?s=1024x1024&w=gi&k=20&c=3duHA5zm19qF4S7O3D2RQ8i3IgbO7_Pz07tVZJWwhqA=" alt="Chef" fluid />
          </Col>
          <Col md={6}>
            <div className="banner-content">
              <h1>Welcome to Your</h1>
              <h3>Bap Er Hotel</h3>
              <p>A charming restaurant serving delicious homemade dishes made with fresh, locally sourced ingredients.</p>
            </div>
          </Col>
        </Row>
      
    </div>
  );
};

export default BannerSection;
