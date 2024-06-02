// components/Card.js
"use client";

import styles from './Card.module.css';

export default function Card({ title, description, image, link }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Learn More
                </a>
            </div>
        </div>
    );
}
