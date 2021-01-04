import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
    return (
        <section className={`${styles.contato} animeLeft`}>
            <Head title="Project React | Contato" description="Entre em contato" />
            <img src={foto} alt="Entre em contato" title="Entre em contato" />
            <div>
                <h1>Contato</h1>
                <ul className={styles.dados}>
                    <li>ramon@contato.com.br</li>
                    <li>011 99999-9999</li>
                    <li>Rua teste contato, 999</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
