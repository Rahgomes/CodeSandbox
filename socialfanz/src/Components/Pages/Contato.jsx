import React from 'react';
import Button from '../Element/Form/Button';
import Input from '../Element/Form/Input';
import Head from '../Helpers/Head';
import styles from './Contato.module.css';

const Contato = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [response, setResponse] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setResponse(nome);
    }

    return (
        <section>
            <Head title="Contato" description="Entre em contato conosco pelo formulário, ou através dos contatos informados. Lembrando que é um protótipo de rede social para finz de estudo" />
            <h1 className={`${styles.mainTitle} animeLeft`}>Contato</h1>
            <div className={`${styles.boxContato} animeLeft`}>
                <div className={styles.contatoDesc}>
                    <h2>Entre em contato conosco</h2>
                    <p><span className="bold">Tel.:</span> +55 11 9999-9999</p>
                    <p><span className="bold">Whats:</span> +55 11 99999-9999</p>
                    <p><span className="bold">End.:</span> Rua Lorem Ipsum Dolor Amet</p>
                    <p className={styles.descContato}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ornare ligula. Donec id pulvinar lacus, vel fermentum lacus. Nunc in odio quis neque posuere ullamcorper in et mi. Quisque tincidunt, mi et suscipit consequat, ipsum augue suscipit leo, nec semper eros magna ut enim. Morbi bibendum finibus convallis. Nulla pretium hendrerit ex, ac dignissim arcu mattis in.</p>
                    <p className={styles.descContato}>Proin congue, libero et vehicula scelerisque, est libero rhoncus tortor, quis pharetra libero metus non nulla. Nam nec augue in dolor accumsan sagittis. Proin iaculis tempor nulla vel suscipit.</p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h2>Preencha o formulário</h2>
                    <Input label="Nome" id="nome" type="text" value={nome} setValue={setNome} placeholder="Digite seu nome" />
                    <Input label="E-mail" id="email" type="email" value={email} setValue={setEmail} placeholder="Digite seu e-mail" />
                    <Input label="Telefone" id="telefone" type="text" value={telefone} setValue={setTelefone} placeholder="Digite seu telefone" />
                    <Button text="Enviar" />
                    {response && <p><span className="bold">{response}</span>, obrigado por nos contatar!</p>}
                </form>
            </div>
        </section>
    )
}

export default Contato
