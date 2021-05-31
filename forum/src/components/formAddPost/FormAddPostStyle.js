import styled from "styled-components";


const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 50vh;
  flex-flow: column;
`;

const Label = styled.label`
  font-size: 12px;
  height: 32px;
  min-width: 80px;
  display: block;
  color: white;
  background-color: rgb(66, 104, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid rgb(66, 104, 255);
  color: rgb(66, 104, 255);
  width: 240px;
  height: 32px;
`;

const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
`;

const Button = styled.button`
  width: 160px;
  height: 32px;
  background-color: rgb(66, 104, 255);
  color: white;
`;

const DisableInput = styled.input`
  border: none;
  color: rgb(66, 104, 255);
  width: 240px;
  height: 32px;
`;


const TextBox = styled.input`
  border: 1px solid rgb(66, 104, 255);
  color: rgb(66, 104, 255);
  width: 240px;
  height: 180px;
`;

export { Form, Label, Input, WrapperInput, Button,DisableInput,TextBox };
