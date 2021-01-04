import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/').then(r => r.json()).then(json => setProdutos(json));
    }, [])

    if (produtos === null) return null;
    return (
        <section className={`${styles.produtos} animeLeft`}>
            <Head title={`Project React | Produtos`} description={`Project React | Conheça nossos produtos`} />
            {produtos.map(produto => (
                <Link className="animeCard hover-link" to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} title={produto.fotos[0].titulo} />
                    <h1 className={`${styles.nome}`}>{produto.nome}</h1>
                </Link>
            ))}
        </section>
    )
}

export default Produtos
