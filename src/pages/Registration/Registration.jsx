import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
  const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext)

const handleRegister = event => {
  event.preventDefault()

  const form = event.target
  const name = form.name.value
  const email = form.email.value
  const photo = form.photo.value
  const password = form.password.value

  setError("")

   if (password.length < 6) {
    setError("password must be more than six digits")
    return
}

  createUser(email, password)
  .then(result => {
    const createUser = result.user
    console.log(createUser)
  })
  .catch(error => {
    console.log(error)
  })
}


    return (
        <div className="login-form w-75 mx-auto">
      <h2 className='text-center mb-4'>Registration</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className='mt-3' as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Name" name="name" required />
          </Col>
        </Form.Group>

        <Form.Group className='mt-3' as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" name="email" required />
          </Col>
        </Form.Group>

        <Form.Group className='mt-3' name="password" as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" name="password" required/>
          </Col>
        </Form.Group>

        <Form.Group className='mt-3'  required as={Row} controlId="formHorizontalPhotoUrl">
          <Form.Label column sm={2}>
            Photo url
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="photo" placeholder="Photo url" />
          </Col>
        </Form.Group>
        

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='mt-3' type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>

      <p className='text-danger'>{error}</p>


      <div className="social-login mt-5">
        <Button variant="primary" size="lg">
          <FaGoogle /> Open with Google
        </Button>{' '}
        <Button variant="secondary" size="lg">
          <FaGithub /> Open with GitHub
        </Button>
      </div>
      <p className='mt-5'>Already have an account? <Link to="/login">Login here.</Link></p>
    </div>
    );
};

export default Registration;