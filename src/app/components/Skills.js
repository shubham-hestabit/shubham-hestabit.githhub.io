"use client";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const MongoDB = '../assets/images/mongodb.png';
const Python = '../assets/images/python.svg';
const jQuery = '../assets/images/jQuery.svg';
const NextJs = '../assets/images/nextJs.png';
const MySQL = '../assets/images/mysql.svg';
const JS = '../assets/images/js.png';

const Skills = () => {
    return (
        <div className='table-container table-responsive fs-3'>
            <table className="table table-danger table-bordered border-black table-striped">
                <thead>
                    <tr>
                        <th>Programming Languages</th>
                        <th>Frontend</th>
                        <th>Backend</th>
                        <th>Databases</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <FaHtml5 color='orangered' size={40} /> HTML5 <br />
                            <FaCss3Alt color='#0066B2' size={40} /> CSS3 <br />
                            <Image className='left-space' src={JS} alt='JavaScript' width={28} /> JavaScript <br />
                            <Image className='left-space' src={Python} alt='Python' width={32} /> Python <br />
                            <FaPhp color='darkblue' size={39} /> PHP
                        </td>
                        <td>
                            <FaBootstrap color='purple' size={41} /> Bootstrap <br />
                            <FaReact className='text-info' size={40} />  ReactJS <br />
                            <Image className='left-space' src={NextJs} alt='jQuery' width={34} /> NextJS <br />
                            <Image className='right-space' src={jQuery} alt='NextJS' width={45} /> jQuery
                        </td>
                        <td>
                            <FaNodeJs className='text-success' size={35} /> NodeJS <br />
                            <FaLaravel className='left-space text-danger' size={30} /> Laravel
                        </td>
                        <td>
                            <Image src={MongoDB} alt='MongoDB' width={40} /> MongoDB <br />
                            <Image src={MySQL} alt='MySql' width={50} /> MySQL
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Skills;