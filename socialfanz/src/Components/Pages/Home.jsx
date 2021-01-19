import React from 'react';
import Head from '../Helpers/Head';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.content}>
            <Head title="Home" description="Tudo sobre nossa Rede social feita em React.js" />
            <div className={`${styles.mansory} animeLeft`}>
                <div className={`${styles.bgGrid} ${styles.itemGrid1}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid2}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid3}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid4}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid5}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid6}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid7}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid8}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid9}`}></div>
                <div className={`${styles.bgGrid} ${styles.itemGrid10}`}></div>
            </div>
        </section>
    )
}

export default Home
