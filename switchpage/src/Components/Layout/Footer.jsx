import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../Helpers/Wrapper';
import { mainBgColorLight, mainBgColorDark, mainTextColorLight, mainTextColorDark } from '../../Variaveis/Theme';
import { LayoutContext } from '../../LayoutContext';
import { NavLink } from 'react-router-dom';

const FooterComponent = styled.footer`
    width: 100%;
    height: 20vh;
    background: ${props => props.switcher ? mainBgColorLight : mainBgColorDark};
    padding: 1rem 0;
    box-sizing: border-box;

    @media (max-width: 767px) {
    height: auto;
    text-align: center;
    }
`;

const ListWrapper = styled.ul`
    display: flex;
    justify-content: space-around;

    @media (max-width: 575.98px) {
        flex-direction: column;
    }
`;

const ListItem = styled.li`
    list-style: none;

    a {
        color: ${props => props.switcher ? mainTextColorLight : mainTextColorDark};
        font-size: 3rem;
        border-bottom: 3px solid transparent;
        transition: 250ms all ease;

        &:hover {
            border-bottom: 3px solid ${props => props.switcher ? mainTextColorLight : mainTextColorDark};
            transition: 250ms all ease;
        }
    }

    @media (max-width: 575.98px) {
        margin-bottom: 1rem;
        
        a {
            padding: 1rem 0;

            &:hover {
            border-bottom: none;
        }
        }
    }
`;

const Footer = () => {
    const { switcher } = React.useContext(LayoutContext);

    return (
        <FooterComponent switcher={switcher}>
            <Wrapper>
                <nav>
                    <ListWrapper>
                        <ListItem switcher={switcher}><NavLink to="/" activeStyle={{ fontWeight: 'bold' }} end>Home</NavLink></ListItem>
                        <ListItem switcher={switcher}><NavLink to="sobre" activeStyle={{ fontWeight: 'bold' }}>Sobre</NavLink></ListItem>
                        <ListItem switcher={switcher}><NavLink to="contato" activeStyle={{ fontWeight: 'bold' }}>Contato</NavLink></ListItem>
                    </ListWrapper>
                </nav>
            </Wrapper>
        </FooterComponent >
    )
}

export default Footer
