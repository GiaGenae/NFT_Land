import React, { Component } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    )
  };
}

export default App;
