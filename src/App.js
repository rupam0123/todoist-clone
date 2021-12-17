import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';

 export default function App () {
  return(
    
    <div className="App"> 
      <Header/>
      <Content/>
    </div>

  );
}