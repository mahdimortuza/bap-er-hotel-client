import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TestimonialSection = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">What Our Customers Say</h2>
      <Row className="justify-content-center">
        <Col md={4} className="text-center mb-5">
          <Image src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNTMwNzU3&ixlib=rb-1.2.1&q=80&w=150" roundedCircle className="mb-3" />
          <h5 className="font-weight-bold mb-0">John Doe</h5>
          <p className="text-muted">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper nibh, a lacinia magna. Sed commodo velit sit amet euismod viverra."</p>
        </Col>
        <Col md={4} className="text-center mb-5">
          <Image src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNTMwNzU3&ixlib=rb-1.2.1&q=80&w=150" roundedCircle className="mb-3" />
          <h5 className="font-weight-bold mb-0">Jane Smith</h5>
          <p className="text-muted">"In vel elit at lacus placerat tempus. Nam ac ipsum vel enim bibendum pellentesque. Suspendisse consectetur massa non pretium faucibus."</p>
        </Col>
        <Col md={4} className="text-center mb-5">
          <Image src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNTMwNzU3&ixlib=rb-1.2.1&q=80&w=150" roundedCircle className="mb-3" />
          <h5 className="font-weight-bold mb-0">Bob Johnson</h5>
          <p className="text-muted">"Etiam volutpat sit amet eros sit amet malesuada. Integer eu eros et quam volutpat ultrices at vitae mi. Fusce interdum, nulla nec euismod convallis."</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialSection;
