import React from 'react';
import styled from 'styled-components';

const FieldsetQuestion = styled.fieldset`
        padding: 2rem;
        margin-bottom: 1rem;
        border: 2px dotted #ddd;
        height: 30vh;
        box-sizing: border-box;    
        @media (max-width: 576px) {
            padding: 1rem;
        }    
    `;

const LegendQuestion = styled.legend`
        font-weight: bold;
        font-size: 1.5rem;
        text-transform: uppercase;
        background: #fff;
        padding: 0 10px;
        @media (max-width: 576px) {
            font-size: 1.2rem;
        }
    `;

const LabelQuestion = styled.label`
        font-family: monospace;
        display: block;
        font-size: 2rem;
        @media (max-width: 576px) {
            font-size: 1.4rem;
            margin-bottom: 20px;
        }   
    `;

const InputQuestion = styled.input`
        display: inline-block;
        width: auto;
        margin-right: 10px;
    `;

const Radio = ({ pergunta, options, onChange, value, id, active, required }) => {
    if (active === false) return null;
    return (
        <FieldsetQuestion>
            <LegendQuestion className="animeUp">{pergunta}</LegendQuestion>
            {options.map(option => (
                <LabelQuestion key={option} className="animeUp">
                    <InputQuestion type="radio" checked={value === option} value={option} id={id} onChange={onChange} required={required} />
                    {option}
                </LabelQuestion>
            ))}
        </FieldsetQuestion>
    )
}

export default Radio
