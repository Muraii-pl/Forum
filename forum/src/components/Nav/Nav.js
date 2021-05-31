import React, { useEffect } from 'react'
import {NavBar,Logo,WrapperLogin,LogoutButton} from './NavStyle'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


    const StyledLink = styled(Link)`
    text-decoration:none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: color .3s ease-in-out;
    &:hover{
        color:rgb(66,104,255);
    }
    
    ` 
const Nav = () => {
    
    
    const toogleLogin = (e) => {
        e.preventDefault()
        localStorage.removeItem('user')
    }
    useEffect(() => {
        
    })
    const Links = window.location.pathname !=="/" ? <StyledLink to="/">Back to HomePage</StyledLink>:<StyledLink to="/login">Sign In/Sign Up</StyledLink>
    const Logout = localStorage.getItem('user') ? <LogoutButton onClick={toogleLogin}>Wyloguj</LogoutButton> : null
    return (
        
        <NavBar>
            <Logo>Forum By Mateusz Głowania</Logo>
            <WrapperLogin>
                {Links}
                {Logout}
            </WrapperLogin>
        </NavBar>
    )
}

export default Nav
