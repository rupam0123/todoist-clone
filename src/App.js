import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { ProjectProvider,SelectedProjectProvider } from './context';

 export const App=() =>{
  return(
    
    <div className="App">
      <Header/>
      <Content/>
    </div>

  );
}