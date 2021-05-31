import React,{useState,useEffect} from 'react'
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {
  Input,
  Label,
  WrapperInput,
  Form,
  TextBox,
} from "../formAddPost/FormAddPostStyle";

const Header = styled.header`
  width: 100vw;
  font-size: 48px;
  color: rgb(66, 104, 255);
  padding: 10px;
  font-weight: bold;
  border-bottom: 3px solid rgb(66, 104, 255);
`;
const ContentWrapper = styled.div`
  width: 100vw;
  font-size: 24px;
  padding: 20px;
`;
const AuthorWrapper = styled.p`
  width: 100vw;
  padding: 10px;
  text-align: right;
  color: rgb(0, 21, 105);
`;

const Button = styled.button`
  width: 160px;
  height: 32px;
  background-color: rgb(66, 104, 255);
  margin-top: 20px;
  margin-left: 20px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgb(0, 21, 105);
  }
`;

const CommentsWrapper = styled.div`
  width: 90vw;
  padding: 10px;
  display: flex;
  border-top: 1px solid rgb(0, 21, 105);
  flex-flow: row wrap;
`;

const CommAuthor = styled.p`
  font-size: 12px;
  color: ${(props) => 
    props.users.username === props.users.author
      ? "palevioletred"
      : 'black'};
  width: 90vw;
  padding-right: 30px;
  text-align: right;
  border-bottom: 1px solid black;
  box-sizing: border-box;;
`;
const WrapperTextBox = styled(WrapperInput)`

flex-direction: column;
height:auto;
`

const Post = () => {
  let { id } = useParams();

  const [posts, setPosts] = useState([
    {
      title: "",
      username: "",
      contents: "",
      comm: ["", ""],
    },
  ]);

  const [commValues,setCommValues] = useState([{    title:'',
  author:'',
  value:''
}])

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCommValues((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };



  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.post("/getPosts", { id }).then((res) => {
      setPosts(res.data);
      setComments(res.data.comm);
    });
  }, []);

  const addComm = e => {
    e.preventDefault()
    const newComm = {
      id:id,
      author:commValues.author,
      text:commValues.value
    }
    axios.post('/addComm',newComm)
  }

  const { title, username, contents } = posts;
  return (
    <>
      <Nav />
      <>
        <Header>{title}</Header>
        <ContentWrapper>{contents}</ContentWrapper>
        <AuthorWrapper>{username}</AuthorWrapper>
        <CommentsWrapper>
          {comments.map((value,index) => {
            const {author,text } = value
            const users = {username,author}
            return (
              <div key={index}>
                <p>{text}</p>
                
                <CommAuthor users>{author}</CommAuthor>
              </div>
            );
          })}
        </CommentsWrapper>
        <Form>
          <WrapperInput>
            <Label>Autor</Label>
              <Input
                value={commValues.author}
                name="author"
                onChange={handleOnChange}
              />
          </WrapperInput>
          <WrapperTextBox>
            <Label>Post</Label>
            <TextBox
              value={commValues.value}
              name="value"
              onChange={handleOnChange}
            />
          </WrapperTextBox>
          <Button onClick={addComm}>Wyślij</Button>
        </Form>
      </>

    </>
  );
};

export default Post;
