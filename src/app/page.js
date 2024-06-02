"use client";

import { useState } from 'react';
import styles from './/styles/Home.module.css';
import Image from 'next/image';
import NavBar from './components/Navbar';

export default function Home() {
  return (
      <div className={styles.container}>
          <div className={styles.navbar}>
              <NavBar />
          </div>
          <main id="mainContent">
              <div className={styles.hero}>
                  <h1>Welcome to My Website!</h1>
                  <p>This is a proof of concept website demonstrating accessibility features.</p>
              </div>
              <div className={styles.content}>
                  <h3>Implementing Accessibility Features</h3>
                  <p>Click TAB to navigate through the site, and ENTER once you want to click an element!</p>
              </div>
              <a href="https://genrandom.com/cats/" className={styles.button} target="_blank" rel="noopener noreferrer">Another Invisible Button :D</a>
          </main>
      </div>
  );
}