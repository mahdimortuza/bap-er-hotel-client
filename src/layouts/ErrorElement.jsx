import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ErrorElement = () => {
    return (
        <section className='mt-5'> 
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <h3 className='text-center'><span>404</span> <br></br> Dang!!! Page Not Found... 
                    <br></br>:(
                        
                        <Image src="https://i.pinimg.com/564x/b5/db/42/b5db422bb4d91eb1b1f10f50fa7a204f.jpg" fluid />
                       
                        Bro, you can stay and pet our dog...
                        <br></br>
                        :)
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ErrorElement;