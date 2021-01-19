import React from 'react';
import { NavLink } from 'react-router-dom';
import CoracaoSVG from '../Element/SVG/CoracaoSVG';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.divisionBar}></div>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationFooterBtn} to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationFooterBtn} to="sobre">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationFooterBtn} to="fanz">Fanz</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.navigationFooterBtn} to="contato">Contato</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.divisionBar}></div>
            <p className={styles.developed}>Developed by <a href="http://www.ramongomes.com.br/" target="_blank" rel="noreferrer" title="Ramon Gomes">Ramon Gomes <CoracaoSVG height={15} width={15} color="#ff6243" /></a></p>
        </section>
    )
}

export default Footer
