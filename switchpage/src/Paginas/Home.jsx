import React from 'react';
import Title from '../Helpers/Title';
import { LayoutContext } from '../LayoutContext';

const Home = () => {
    const { switcher } = React.useContext(LayoutContext);

    return (
        <Title switcher={switcher}>
            Home
        </Title>
    )
}

export default Home
