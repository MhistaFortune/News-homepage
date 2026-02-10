import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';
import iconMenu from '../../assets/images/icon-menu.svg';
import iconMenuClose from '../../assets/images/icon-menu-close.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

    return (
        <header className={styles.navContainer}>
            <img src={logo} alt="News Homepage Logo" className={styles.logo} />

            {/* Desktop Nav */}
            <nav className={styles.desktopNav}>
                {navLinks.map((link) => (
                    <a key={link} className={styles.navLink}>{link}</a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
                <img src={isOpen ? iconMenuClose : iconMenu} alt="Menu Icon" />
            </button>

            {/* Mobile Sidebar */}
            {isOpen && <div className={styles.mobileOverlay} onClick={toggleMenu}></div>}
            <nav className={`${styles.mobileSidebar} ${isOpen ? styles.mobileSidebarOpen : styles.mobileSidebarClosed}`}>
                {navLinks.map((link) => (
                    <a key={link} className={styles.mobileNavLink} onClick={toggleMenu}>{link}</a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
