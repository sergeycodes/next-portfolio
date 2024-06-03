// components/NavBar.js
"use client";

import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function NavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleDropdown();
        }
    };

    const toggleColorBlindMode = () => {
        const root = document.documentElement;
        const isColorBlindMode = root.getAttribute('data-colorblind') === 'true';
        root.setAttribute('data-colorblind', String(!isColorBlindMode));
        
    };

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
            <div className={styles.settingsIconContainer}>
                <div
                    className={styles.settingsIcon}
                    onClick={toggleDropdown}
                    onKeyDown={handleKeyDown}
                    tabIndex="0"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={dropdownVisible}
                >
                    <img src="/icons8-settings-50.png" alt="Settings" />
                </div>
                {dropdownVisible && (
                    <div className={styles.dropdownMenu}>
                        <button onClick={toggleColorBlindMode}>Toggle Colorblind Mode</button>
                    </div>
                )}
            </div>
        </nav>
    );
}
