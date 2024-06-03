"use client";

import { useState } from 'react';
import NavBar from "../components/Navbar";
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function About() {
    const [interests, setInterests] = useState(['Skiing', 'Hiking', 'Piano', 'Gaming']);
    const [isReordered, setIsReordered] = useState(false);
  
    const reorderList = () => {
      const reorderedInterests = [...interests].reverse();
      setInterests(reorderedInterests);
      setIsReordered(!isReordered);
    };
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <NavBar />
        <h1>About Me</h1>
        <p>My name is Sergey Barzul</p>
        <p>I am A computer Science student at UW Bothell.</p>
        <Image
          src="/selfie.jpg"
          alt="Sergey Barzul"
          width={150}
          height={250}
          style={{ borderRadius: '10%' }}
        />

        <h2>Things That Interest Me:</h2>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <button className={styles.aboutButton} onClick={reorderList}>
          {isReordered ? 'Original Order' : 'Reverse Order'}
        </button>
      </div>
    );
}