import React, { useState } from "react";
import { StyledWrapper, Form, Label, Input,WrapperInput,Button } from "./SignUpStyle";
import axios from 'axios'

const SignUp = () => {

  const [inputValues, setInputValues] = useState({ 
    loginr: '', passwordr: '' 
  });

  
  

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues(prevInput => {
      return{
        ...prevInput,
        [name]:value
      }
    });
    
  }; 

  const registerUser = e => {
    e.preventDefault()
    const newUser = {
      username:inputValues.loginr,
      password:inputValues.passwordr
    }
    axios.post('/register',newUser)
  }


  return (
    <StyledWrapper>
      Register
      <Form>
        <WrapperInput>
          <Label>Login</Label>
          <Input placeholder="Login" value={inputValues.loginr} type="text" name="loginr" onChange={handleOnChange}/>
        </WrapperInput>
        <WrapperInput>
        <Label>Hasło</Label>
        <Input placeholder="Password" value={inputValues.passwordr} type="password" name="passwordr" onChange={handleOnChange}/>
        </WrapperInput>
        <WrapperInput>
        </WrapperInput>
        <Button onClick={registerUser}>Sign Up</Button>
      </Form>
    </StyledWrapper>
  );
};

export default SignUp;
