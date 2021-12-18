import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/header';
import About from './pages/about';

import React from 'react';

function App() {
  return (
    <React.Fragment>
    <Header />
    <About />
      
    </React.Fragment>
  );
}

export default App;
