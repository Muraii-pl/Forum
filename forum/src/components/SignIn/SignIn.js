import React ,{ useState } from "react";
import {
  StyledWrapper,
  Form,
  Label,
  Input,
  WrapperInput,
  Button,
} from "./SignInStyle";
import axiox from 'axios'

const SignIn = () => {
  const [inputValues, setInputValues] = useState({
    loginl: "",
    passwordl : "",
  });

  

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const loginUser = (e) =>
  {
    e.preventDefault()
    const User={
      username:inputValues.loginl,
      password:inputValues.passwordl
    }
    axiox.post('/login',User).then(res=>{
        console.log(res.data)
        localStorage.setItem('user',res.data)
      }
    )
  }


  return (
    <StyledWrapper>
      <Form>
        <WrapperInput>
          <Label>Login</Label>
          <Input placeholder="Login" value={inputValues.loginl} type="text" name="loginl" onChange={handleOnChange} />
        </WrapperInput>
        <WrapperInput>
          <Label>Hasło</Label>
          <Input placeholder="Password" value={inputValues.passwordl} type='password' name="passwordl" onChange={handleOnChange} />
        </WrapperInput>
        <Button onClick={loginUser}>Sign In</Button>
      </Form>
    </StyledWrapper>
  );
};

export default SignIn;
