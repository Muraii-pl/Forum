import React,{ useState, useEffect} from "react";
import Article from "../Article/Article";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(66, 104, 255);
  color: white;
  background-color: transparent;
  transition: border-color 0.3s ease-in-out;
  &:hover {
    border-color: rgb(0, 21, 105);
  }
`;
const StyledPostLink = styled(Link)`
  text-decoration: none;
  color:black;
  
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

const IndexPage = () => {


  const [posts,setPosts] = useState([{
    title:'',
    author:'',
    value:''
}])

useEffect(()=> {
    fetch('/article').then(res => {
    if(res.ok){
        return res.json() 
    }
}).then(jsonRes => setPosts(jsonRes))
})


  return (
      <>
      <Nav />
       <div>
        {posts.map(value => {
          return <StyledPostLink to={`/post/${value._id}`} key={value._id}><Article value={value}></Article></StyledPostLink>
        })}
        <Button>
          <StyledLink to="addPost">Dodaj Post</StyledLink>
        </Button>
      </div>
      <h1>{localStorage.getItem('user')}</h1>
    </>
  );
};

export default IndexPage;
