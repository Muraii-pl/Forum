import styled from "styled-components";

const StyledWrapper = styled.div`
width: 50%;
height: 70vh;
margin:0 auto;
padding: 20px;
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
flex-flow:column wrap;
`

const Label = styled.label`
     font-size: 12px;
     height: 32px;
     min-width: 80px;
     display: block;
     color: white;
     background-color:rgb(66, 104, 255);
     display: flex;
     justify-content: center;
     align-items: center;
`


const Input = styled.input`
    border:1px solid rgb(66, 104, 255);
    color:rgb(66, 104, 255);
    width:240px;
    height: 32px;
`

const WrapperInput = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 42px;
`
const Button = styled.button`
width: 160px;
height: 32px;
background-color: rgb(66,104,255);
color: white;
`

export {StyledWrapper,Form,Label,Input,WrapperInput,Button}