import React from 'react';

const EnderecoSVG = ({height, width, handleProfile}) => {
    return (
        <svg height={height} width={width} onClick={(e) => handleProfile(e.target.id)} id="endereco" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path id="endereco" d="m256 75c-24.8125 0-45 20.1875-45 45s20.1875 45 45 45 45-20.1875 45-45-20.1875-45-45-45zm0 0" />
            <path id="endereco" d="m256 0c-66.167969 0-120 53.832031-120 120 0 22.691406 6.371094 44.796875 18.429688 63.925781l101.570312 162.074219 101.570312-162.074219c12.058594-19.128906 18.429688-41.234375 18.429688-63.925781 0-66.167969-53.832031-120-120-120zm0 195c-41.351562 0-75-33.648438-75-75s33.648438-75 75-75 75 33.648438 75 75-33.648438 75-75 75zm0 0" />
            <path id="endereco" d="m182.996094 512h145.957031l-11.535156-91h-123.175781zm0 0" />
            <path id="endereco" d="m197.992188 391h50.914062l-42.488281-67.386719zm0 0" />
            <path id="endereco" d="m343.828125 391h118.175781l-37.5-90h-92.21875zm0 0" />
            <path id="endereco" d="m49.996094 391h117.765625l11.25-90h-91.515625zm0 0" />
            <path id="endereco" d="m263.09375 391h50.476562l-8.527343-66.523438zm0 0" />
            <path id="endereco" d="m164.011719 421h-126.515625l-37.496094 91h152.765625zm0 0" />
            <path id="endereco" d="m474.503906 421h-126.832031l11.539063 91h152.789062zm0 0" />
        </svg>
    )
}

export default EnderecoSVG
