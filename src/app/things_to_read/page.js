// pages/things_to_read.js
"use client";

import NavBar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function ThingsToRead() {
    const links = [
        { href: 'https://example.com/1', text: 'Link 1' },
        { href: 'https://example.com/2', text: 'Link 2' },
        { href: 'https://example.com/3', text: 'Link 3' },
        { href: 'https://example.com/4', text: 'Link 4' },
        { href: 'https://example.com/5', text: 'Link 5' },
        { href: 'https://example.com/6', text: 'Link 6' },
        { href: 'https://example.com/7', text: 'Link 7' },
        { href: 'https://example.com/8', text: 'Link 8' },
        { href: 'https://example.com/9', text: 'Link 9' },
        { href: 'https://example.com/10', text: 'Link 10' }
    ];

    return (
        <div style={{ paddingTop: '80px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <NavBar />
            <h1>Things to Read</h1>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
