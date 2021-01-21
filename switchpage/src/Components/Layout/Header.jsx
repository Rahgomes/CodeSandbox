import React from 'react';
import styled from 'styled-components';
import { mainBgColorLight, mainBgColorDark, mainTextColorLight, mainTextColorDark, primaryColorLight, primaryColorDark } from '../../Variaveis/Theme';
import Wrapper from '../../Helpers/Wrapper';
import Logo from '../Logo/Logo';
import Switcher from '../Switcher/Switcher';
import { LayoutContext } from '../../LayoutContext';
import { NavLink } from 'react-router-dom';

const HeaderComponent = styled.header`
    width: 100%;
    height: 20vh;
    background: ${props => props.switcher ? mainBgColorLight : mainBgColorDark};
    padding: 1rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
    height: auto;
    text-align: center;
    }
`;

const HeaderNavigation = styled.nav`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ListWrapper = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 30rem;
    box-sizing: border-box;

    @media (max-width: 767px) {
        margin: 1rem 0;
        border-top: 3px solid ${props => props.switcher ? primaryColorLight : primaryColorDark};
        border-bottom: 3px solid ${props => props.switcher ? primaryColorLight : primaryColorDark};
        padding: 2rem 0;
        width: auto;
    }

    @media (max-width: 575.98px) {
        flex-direction: column;
    }
`;

const ListItem = styled.li`
    list-style: none;    

    a {
        color: ${props => props.switcher ? mainTextColorLight : mainTextColorDark};
        font-size: 2rem;
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

const Header = () => {
    const { switcher } = React.useContext(LayoutContext);

    return (
        <HeaderComponent switcher={switcher}>
            <Wrapper>
                <HeaderNavigation>
                    <Logo />
                    <ListWrapper switcher={switcher}>
                        <ListItem switcher={switcher}><NavLink to="/" activeStyle={{ fontWeight: 'bold' }} end>Home</NavLink></ListItem>
                        <ListItem switcher={switcher}><NavLink to="sobre" activeStyle={{ fontWeight: 'bold' }}>Sobre</NavLink></ListItem>
                        <ListItem switcher={switcher}><NavLink to="contato" activeStyle={{ fontWeight: 'bold' }}>Contato</NavLink></ListItem>
                    </ListWrapper>
                    <Switcher />
                </HeaderNavigation>
            </Wrapper>
        </HeaderComponent>
    )
}

export default Header
