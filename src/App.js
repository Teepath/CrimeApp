import React, { Component } from 'react';
import Movie from './Components/movie';
import './App.css';
import './firebaseDb';

class App extends Component {
  render() {
    return (
      <div>
      <Movie />
      </div>
    );
  }
}

export default App;
