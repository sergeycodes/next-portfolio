"use client";

import { useState } from 'react';
import styles from './/styles/Home.module.css';
import Image from 'next/image';
import NavBar from './components/Navbar';


export default function Home() {
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
        <h1>Hello World!</h1>
      </div>
    );
  }
