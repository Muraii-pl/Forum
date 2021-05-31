import styled from "styled-components";

const NavBar = styled.nav `
    width: 100vw;
    height: 120px;
    background-color: rgb(173, 173, 173);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
`
const Logo = styled.h1 `
width: 33vw;
height: 80px;
display: flex;
align-items:center;
`
const WrapperLogin = styled.div`
height: 80px;
display: flex;
align-items: flex-start;
flex-direction: column;
`
const LogoutButton = styled.button`
    background-color: transparent;
    height: 60px;
    width: 120px;
    padding: 10px;
    font-size:16px;
    color:white;
    cursor:pointer;
`

export {NavBar,Logo,WrapperLogin,LogoutButton}