import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../Helpers/Wrapper';
import { LayoutContext } from '../../LayoutContext';
import { secondBgColorLight, secondBgColorDark } from '../../Variaveis/Theme';

const MainComponent = styled.main`
    width: 100%;
    height: 60vh;
    background: ${props => props.switcher ? secondBgColorLight : secondBgColorDark};
    padding: 1rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main = ({ children }) => {
    const { switcher } = React.useContext(LayoutContext);

    return (
        <MainComponent switcher={switcher}>
            <Wrapper>
                {children}
            </Wrapper>
        </MainComponent>
    )
}

export default Main
