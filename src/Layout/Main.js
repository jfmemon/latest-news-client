import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNavbar from '../SharedPages/LeftSideNavbar/LeftSideNavbar';
import RightSideNavbar from '../SharedPages/RightSideNavbar/RightSideNavbar';
import Header from '../SharedPages/Header/Header';
import Footer from '../SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNavbar></LeftSideNavbar>
                    </Col>
                    <Col lg='7'>
                    <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNavbar></RightSideNavbar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;