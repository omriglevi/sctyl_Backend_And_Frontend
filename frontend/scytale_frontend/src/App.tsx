import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import MainComponent from './AppComponents/MainComponent';
import AppNavbar from './AppComponents/Navbar';

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <AppNavbar/>
      <MainComponent/>
    </div>
  );
}

export default App;
