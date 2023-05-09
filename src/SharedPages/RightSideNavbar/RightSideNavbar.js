import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../Assets/images/brand1.png';
import brand2 from '../../Assets/images/brand2.jpg';
const RightSideNavbar = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='px-5' variant="outline-primary"><FaGoogle /> Login with google</Button>
                <Button className='mt-2 px-5' variant="outline-dark"><FaGithub /> Login with github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube />Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp />Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord />Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Privacy policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Terms & condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNavbar;