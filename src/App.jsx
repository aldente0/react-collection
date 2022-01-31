/* import './App.css'; */
import React from 'react';
import {Posts} from './components/Posts';

class App extends React.Component {

  state = {
    posts: [
      {id: 'aaa', name: 'JS Basic'},
      {id: 'bbb', name: 'JS Advanced'},
      {id: 'ccc', name: 'React Basic'}
    ]
  }

  handleSomething = () => {
    console.log('hello from App.jsx');
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)});
  }

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} removePost={this.removePost}/>
      </div>
    );
  }
  
}

export default App;
