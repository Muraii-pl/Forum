import React,{useState} from 'react'

import IndexPage from './components/pages/index'
import LoginPage from './components/pages/login'
import AddPost from './components/pages/addPost'
import Post from './components/pages/post'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";



const App = () => {
  

  

  return (
    <>
      
      <Router>
        <>
          <Route exact path='/' component={IndexPage} />
          <Route path='/login' component={LoginPage}/>
          <Route path='/addPost' component={AddPost}/>
          <Route path='/post/:id' component={Post}/>
        </>
      </Router>

    </>
  )
}

export default App
