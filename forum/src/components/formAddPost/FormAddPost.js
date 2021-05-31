import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import {
  Input,
  Label,
  WrapperInput,
  Button,
  Form,
  DisableInput,
  TextBox,
} from "./FormAddPostStyle";



const WrapperTextBox = styled(WrapperInput)`

flex-direction: column;
height:auto;
`
const FormAddPost = () => {

  const [postValues,setPostValues] = useState([{    title:'',
  author:'',
  value:''
}])

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPostValues((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const addPost = e => {
    e.preventDefault()
    const newPost = {
      title:postValues.title,
      author:localStorage.getItem('user') || postValues.author,
      value:postValues.value
    }
    axios.post('/addPost',newPost)
  }


  return (
      <Form>
        <WrapperInput>
          <Label>Autor</Label>
          {localStorage.getItem('user') ? <DisableInput value={localStorage.getItem('user')} name='author'/> : <Input value={postValues.author} name='author' onChange={handleOnChange} />}
        </WrapperInput>
        <WrapperInput>
          <Label>Temat</Label>
          <Input value={postValues.title} name='title' onChange={handleOnChange}/>
        </WrapperInput>
        <WrapperTextBox>
          <Label>Post</Label>
          <TextBox value={postValues.value} name='value' onChange={handleOnChange}/>
        </WrapperTextBox>
        <Button onClick={addPost}>Wyślij</Button>
      </Form>
  );
};

export default FormAddPost;
