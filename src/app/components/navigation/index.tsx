'use client';
import { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        </>
    )
}