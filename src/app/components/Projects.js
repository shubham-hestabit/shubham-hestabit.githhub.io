"use client";
import { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { MyProjects } from '../constants/ProjectDetails';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(MyProjects);
    }, []);

    return (
        <Container id="projects" style={{ marginTop: '15%' }}>
            <h1 className="section-title">Projects</h1>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} xs={12} md={6}>
                        <Card className="project-card bg-transparent m-3">
                            <Card.Header className='project-header text-center fs-1 fw-bold'>
                                <a className='project-title' href={project.url} target='_blank' rel='noopener noreferrer'>
                                    {project.title}
                                </a>
                            </Card.Header>
                            <Card.Body className='text-justify fs-5 project-description'>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer className='project-footer'>
                                <Card.Text className='fs-3' style={{ color: "palevioletred" }}>Technology</Card.Text>
                                <Card.Text className='text-center fs-4 mb-3'>{project?.technology?.join(", ")}</Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;