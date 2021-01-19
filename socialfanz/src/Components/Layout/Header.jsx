import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <Link className={styles.logoBtn} to="/">Social Fanz</Link>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationBtn} to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationBtn} to="sobre">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationBtn} to="fanz">Fanz</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationBtn} to="contato">Contato</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
