"use client";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const contactImg = "/assets/images/contact.png";

const Contact = () => {
    return (
        <Container id="contact" style={{ marginTop: '15%', marginBottom: '10%' }}>
            <h1 className="section-title mb-3">Contact me</h1>
            <Card className='contact-card bg-transparent'>
                <Row className='d-flex justify-content-center'>
                    <Col md={7}>
                        <Card.Img src={contactImg} alt="ContactMe" className="contactImg" />
                    </Col>
                    <Col md={5} className="mt-4 fs-2 social-icons">
                        <a href="mailto:shubhamsaini5878@gmail.com">
                            <FaEnvelope color='#FFA500' />&nbsp;
                            <span>shubhamsaini5878@gmail.com</span>
                        </a>
                        <a href="tel:+917669454417">
                            <FaPhoneAlt color='#0e76c1' />&nbsp;
                            <span>+91 7669454417</span>
                        </a>
                        <a href="https://www.instagram.com/shubham_saini_up12">
                            <FaInstagram color='#d62976' />&nbsp;
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/in/shubham-saini-662a31147">
                            <FaLinkedin color='#0e76a8' />&nbsp;
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/shubham-saini-25">
                            <FaGithub color='#B2BEB5' />&nbsp;
                            <span>GitHub</span>
                        </a>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Contact;