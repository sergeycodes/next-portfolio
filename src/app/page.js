"use client";

import styles from './/styles/Home.module.css';
import NavBar from './components/Navbar';


export default function Home() {
  return (
    <div className={styles.container}>
      <a href="#mainContent" className={styles.skipNav}>Skip to main content</a>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <main id="mainContent">
        <div className={styles.hero}>
          <h1>Welcome to <span className={styles.third} >My Website</span></h1>
          <p>This is a proof of concept website demonstrating accessibility features.</p>
        </div>
        <div className={styles.content}>
          <h2>Implementing Accessibility Features</h2>
          <p>Click TAB to navigate through the site, and ENTER once you want to click an element!</p>
          <a href="https://genrandom.com/cats/" className={styles.button} target="_blank" rel="noopener noreferrer">Another Invisible Button :D</a>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Keyboard Accessibility</h3>
            <p>Ensuring your site can be navigated using a keyboard helps users with motor disabilities who cannot use a mouse.</p>
          </div>
          <div className={styles.card}>
            <h3>Color Blindness</h3>
            <p>Designing with color blindness in mind ensures that all users can distinguish content regardless of their color perception.</p>
          </div>
          <div className={styles.card}>
            <h3>Resizable Text</h3>
            <p>Implementing resizable text for your website without breaking the layout will help people who are visually impaired.</p>
          </div>
        </div>
      </main>
    </div>
  );
}