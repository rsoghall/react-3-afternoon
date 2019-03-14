import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from '../components/Post/Post.js'

const baseUrl = ('https://practiceapi.devmountain.com/api/')
class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    
    
    
  }
  
  componentDidMount() {
    axios.get(`${baseUrl}posts`)
    .then(res => {
      console.log(res.data)
      this.setState({
        posts: res.data})
    })
    .catch(err => console.log('error', err))

  }

  updatePost= (id, text) => {
    axios.put(`${baseUrl}posts?id=${id}`, {text})
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
    .catch(err => console.log('error', err))
    
  
  }

  deletePost = (id) => {
    axios.delete(`${baseUrl}posts?id=${id}`)
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
    .catch(err => console.log('error', err))

  }

  createPost = (text) => {
    axios.post(`${baseUrl}posts`, {text})
    .then(res => {
      this.setState({posts: res.data})
    })
    .catch(err => console.log('error', err))

  }

  render() {
    const { posts } = this.state;
//     let postDisplay = posts.map((item) => {
//       return item.text
// console.log(item)
//     })
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose  createPostFn={this.createPost}/>
          

          {
            posts.map( post => (
            <Post 
            key={post.id}
            id={post.id} 
            text={post.text}
            date={post.date}
            updatePostFn={this.updatePost}
            deletePostFn={this.deletePost}
            
            />
          ))
          }
          
          
        </section>
      </div>
    );
  }
}

export default App;
