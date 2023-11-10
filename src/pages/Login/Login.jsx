import React, { useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }



  return (
    <div className="login-form w-75 mx-auto mt-5">
      <h2 className='text-center mb-4'>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="email" required type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2} >
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="password" required className='mt-3' type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='mt-3' type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>

      <div className="social-login mt-5">
        <Button variant="primary" size="lg">
          <FaGoogle /> Sign in with Google
        </Button>{' '}
        <Button variant="secondary" size="lg">
          <FaGithub /> Sign in with GitHub
        </Button>
      </div>
      <p className='mt-5'>New at baper hotel? <Link to="/registration">Registration here.</Link></p>
    </div>
  );
};

export default Login;
