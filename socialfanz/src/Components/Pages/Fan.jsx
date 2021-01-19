import React from 'react';
import styles from './Fan.module.css';
import NomeSVG from '../Element/SVG/NomeSVG';

const Fan = ({ fan }) => {
    return (
        <>
            <div className={styles.boxCardFanz}>
                <div className={styles.headerCardFanz}>
                    <div className={styles.boxImgCardFanz}>
                        <img className={styles.imgCardFanz} src={fan.imagem} alt={fan.nome} title={fan.nome} />
                    </div>
                </div>
                <div className={styles.descCardFanz}>
                    <div className={styles.dataCardFanz}>
                        <small>{fan.label}</small>
                        <p>{fan.nome}</p>
                    </div>
                    <div className={styles.iconCardFanz}>
                        <NomeSVG height={30} width={30} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fan
