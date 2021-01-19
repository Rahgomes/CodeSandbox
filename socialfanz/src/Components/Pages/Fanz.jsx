import React from 'react';
import { UserContext } from '../../UserContext';
import Error from '../Helpers/Error';
import Fan from './Fan';
import styles from './Fanz.module.css';
import Spinner from '../Helpers/Spinner';
import Head from '../Helpers/Head';

const Fanz = () => {
    const { data, spinner, error } = React.useContext(UserContext);

    if (error) return <Error error={error} />;
    if (spinner) return <Spinner />;
    if (data === null) return null;
    return (
        <section>
            <Head title="Fanz" description="Conheça nossos Fanz. Protótipo de rede social feita em React.js" />
            <h1 className={`${styles.mainTitle} animeLeft`}>Fanz</h1>
            <div className={`${styles.boxFanz} animeLeft`}>
                <h2>Conheça nossos Fanz</h2>
                <div className={styles.mansoryCardFanz}>
                    {data.map(fan => <Fan key={fan.id} fan={fan} />)}
                </div>
            </div>
        </section>
    )
}

export default Fanz
