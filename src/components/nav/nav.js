import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    background: ${({ theme }) => theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledA = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    padding: 10%;
`
const StyledIcon = styled.i`
    font-size: 2.5rem;
`

const Nav = () => (
    <StyledNav>
        <StyledA>
            <StyledIcon className="fas fa-user"></StyledIcon>
        </StyledA>
        <StyledA>
            <StyledIcon className="fas fa-briefcase"></StyledIcon>
        </StyledA>
        <StyledA>
            <StyledIcon className="fas fa-phone"></StyledIcon>
        </StyledA>
    </StyledNav>
)
export default Nav;