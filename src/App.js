import React from 'react';
import './App.css';
import Header from './components/header/header';
import Inputs from './components/inputs/inputs';
import Tips from './components/tips/tips';
import Suggestion from './components/suggestion/ suggestion';
import { InputProvider } from './contexts/InputContext';
import Ticket from './components/ticket/ticket';

function App() {

  return (
    <InputProvider>

      <React.Fragment>
        <Header />
        <Inputs />
        <Tips />
        <Suggestion />
        <Ticket />  
        </React.Fragment>

    </InputProvider>
  );

}

export default App;
