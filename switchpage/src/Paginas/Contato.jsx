import React from 'react';
import Title from '../Helpers/Title';
import { LayoutContext } from '../LayoutContext';

const Contato = () => {
    const { switcher } = React.useContext(LayoutContext);

    return (
        <Title switcher={switcher}>
            Contato
        </Title>
    )
}

export default Contato
