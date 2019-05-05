import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { Layout } from './layout';
import {Footer} from './Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
