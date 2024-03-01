"use client";
import ExperienceDetails from '../constants/ExperienceDetails';
import EducationDetails from '../constants/EducationDetails';
import { DataTable } from '../common/DataTable';
import { Container } from 'react-bootstrap';
import Skills from './Skills';

const About = () => {
    return (
        <Container id="about" style={{ marginTop: '15%' }}>
            <h1 className='section-title mb-4'>About Me</h1>
            <div className='mt-4'>
                <h1>Skills and Technology</h1>
                <Skills />
            </div>
            <div className='mt-4'>
                <h1>Experience</h1>
                <DataTable data={ExperienceDetails} />
            </div>
            <div className='mt-3'>
                <h1>Education</h1>
                <DataTable data={EducationDetails} />
            </div>
        </Container>
    );
}

export default About;