import React from 'react';
import styles from './Sobre.module.css';
import sobreImg from '../../Images/sobre.jpg';
import Head from '../Helpers/Head';

const Sobre = () => {
    return (
        <section>
            <Head title="Sobre" description="Saiba mais sobre nossa Rede social feita para prática em React.js" />
            <h1 className={`${styles.mainTitle} animeLeft`}>Sobre</h1>
            <div className={`${styles.boxSobre}`}>
                <h2 className="animeLeft">Sobre a Social Fanz</h2>
                <p className="animeLeft">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
            </div>
            <div className={`${styles.imgSobre} animeLeft`}>
                <img src={sobreImg} alt="Sobre a Social Fanz" title="Sobre a Social Fanz" />
            </div>
        </section>
    )
}

export default Sobre
