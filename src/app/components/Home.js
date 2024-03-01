"use client";
import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';

const MyImg = '../assets/images/shubham.png';

const Home = () => {
    return (
        <Container id="home" style={{ marginTop: '17%' }}>
            <Row>
                <Col md={5}>
                    <div className='profile-picture'>
                        <img src={MyImg} alt="Shubham Saini" />
                    </div>
                    <div className='profile-info'>
                        <div className="fw-bold fs-1">Shubham Saini</div>
                        <div className='fw-bold fs-5'>Software Engineer</div>
                    </div>
                </Col>
                <Col md={7}>
                    <div className='my-intro'>
                        My name is Shubham Saini, and I'm a Full-Stack web developer.
                        I have expertise in HTML, CSS, and JavaScript, including React
                        and jQuery for frontend development, and Node.js and Express.js
                        for backend development. I graduated with a Bachelor's degree
                        in Information Technology in 2022.
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default Home;