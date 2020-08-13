import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import NavItem from './NavItem';
import HeaderLink from './HeaderLink';

const Wrapper = styled.header`
    background-color: ${props => props.theme.palette.primary.dark};   
    min-height: 6.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.app.white};
`;

const Header = () => (
    <Wrapper>
        <NavBar>
            <NavItem>
                <HeaderLink exact to="/">
                    Bon Voyage
                </HeaderLink>
            </NavItem>
        </NavBar>
    </Wrapper>
);

export default Header;
