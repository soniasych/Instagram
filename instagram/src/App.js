import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';
import { Layout } from './Layout/layout';
import {Footer} from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="screen-content">
        <NavBar />
        <Layout />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
