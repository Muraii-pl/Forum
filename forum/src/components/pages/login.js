import React from 'react'
import styled from 'styled-components'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Nav from '../Nav/Nav'

 const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;


 `


const LoginPage = () => {
    return (
        <>
        <Nav/>
        <StyledWrapper>
            <SignIn/>
            <SignUp/>
        </StyledWrapper>
        </>
    )
}

export default LoginPage
