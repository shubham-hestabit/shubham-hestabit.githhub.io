"use client";
import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='custom-background fs-5 fw-bold'>
            {`Copyright © ${year} | Shubham Saini`}
        </footer>
    );
}

export default Footer;