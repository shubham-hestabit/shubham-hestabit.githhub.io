import React from 'react';
import { Modal } from 'react-bootstrap';

function CommonModal({ show, onHide, title, data }) {
    return (
        <Modal show={show} size='lg' onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title className='text-black'>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='table-container fs-6'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {data.headers.map(header => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.rows.map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, idx) => (
                                        <td key={idx}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default CommonModal;
