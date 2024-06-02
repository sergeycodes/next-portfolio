// components/NavBar.js
"use client";

import styles from './Navbar.module.css';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
        <a href="#mainContent" className={styles.skipNavLink}>Skip Navigation</a>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link legacyBehavior href="/">
                        <a className={styles.navLink}>Home</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link legacyBehavior href="/about">
                        <a className={styles.navLink}>About</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link legacyBehavior href="/things_to_read">
                        <a className={styles.navLink}>Things to Read</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
