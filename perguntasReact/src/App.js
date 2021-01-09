import React from 'react';
import Radio from './Form/Radio';
import styled from 'styled-components';
import './App.css';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const MainTitle = styled.h1`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    text-decoration: underline;
  `;

const StepsQuestions = styled.h2`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    margin: 20px 0;
  `;

const ContainerPrevNext = styled.div`
    display: flex;
    justify-content: space-between;
  `;

const ButtonPrevNext = styled.button`
    width: 40%;
    color: #fff;
    background: linear-gradient(to bottom, #000, #444, #000);
    box-sizing: border-box;
    transition: 250ms ease all;
    &:hover, &:active, &:focus {
      font-weight: bold;
      transition: 250ms ease all;
      letter-spacing: 5px;
      background: linear-gradient(to bottom, #444, #000, #444);
      box-shadow: none;
    }
  `;

const ButtonRestart = styled.button`
    width: 100%;
    color: #fff;
    background: linear-gradient(to bottom, #000, #444, #000);
    box-sizing: border-box;
    transition: 250ms ease all;
    &:hover, &:active, &:focus {
      font-weight: bold;
      transition: 250ms ease all;
      letter-spacing: 5px;
      background: linear-gradient(to bottom, #444, #000, #444);
      box-shadow: none;
    }
  `;

const Resultado = styled.h2`
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    margin: 0;
    @media (max-width: 576px) {
      height: 30vh;
      font-size: 3rem;
    }
  `;

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null)
  const [steps, setSteps] = React.useState(1);

  function handleChange({ target }) {
    setRespostas({
      ...respostas,
      [target.id]: target.value
    })
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta)
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClickProxima() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
      setSteps(steps + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  function handleClickAnterior() {
    if (slide === 0) {
      setSlide(slide);
    } else {
      setSlide(slide - 1);
      setSteps(steps - 1);
    }
  }

  function handleRestart() {
    setSlide(slide - 4);
    setResultado(null);
    setRespostas({
      p1: '',
      p2: '',
      p3: '',
      p4: ''
    });
    setSteps(steps - 3);
  }

  return (
    <>
      <MainTitle className="animeBottom">React - Perguntas</MainTitle>
      {
        !resultado && <StepsQuestions className="animeBottom">Pergunta {steps} de {perguntas.length}</StepsQuestions>        
      }
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio key={pergunta.id} active={slide === index} value={respostas[pergunta.id]} onChange={handleChange} {...pergunta} required />
        ))}
        {
          resultado ?
            <>
              <Resultado className="animeBottom">{resultado}</Resultado>
              <ButtonRestart onClick={handleRestart} className="animeUp">Recomeçar</ButtonRestart>
            </> :
            <ContainerPrevNext>
              <ButtonPrevNext onClick={handleClickAnterior} className="animeRight">Anterior</ButtonPrevNext>
              <ButtonPrevNext onClick={handleClickProxima} className="animeLeft">Próxima</ButtonPrevNext>
            </ContainerPrevNext>
        }
      </form>
    </>
  );
};

export default App;
