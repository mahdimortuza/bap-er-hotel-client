import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './ContactForm.css'

function ContactForm() {
  return (
   <div>
    <h1 className='text-center mt-5'>Order now</h1>
     <Container>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter mobile number" required />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" required />
        </Form.Group>

        <Button className='mt-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
   </div>
  );
}

export default ContactForm;
