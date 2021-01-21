import React from 'react';
import Title from '../Helpers/Title';
import { LayoutContext } from '../LayoutContext';

const Sobre = () => {
    const { switcher } = React.useContext(LayoutContext);

    return (
        <Title switcher={switcher}>
            Sobre
        </Title>
    )
}

export default Sobre
