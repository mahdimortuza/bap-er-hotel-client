import React from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Container, Spinner } from 'react-bootstrap';

const Main = () => {
    const navigation = useNavigation()
    return (
        <Container>
            <Header></Header>
            <div>
                {
                    navigation.state === "loading" && <Spinner animation="border" variant="primary" />
                }
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;
