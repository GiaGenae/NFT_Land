import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu';
import GalleriesList from './Components/GalleriesList';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='galleries' element={<GalleriesList />} />
        </Routes>
      </div>
    )
  };
}

export default App;
