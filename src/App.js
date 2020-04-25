import React from 'react';
import './App.css';
import Header from './components/header/header';
import Inputs from './components/inputs/inputs';
import { InputProvider } from './contexts/InputContext';
import Tips from './components/tips/tips';
import Suggestion from './components/suggestion/ suggestion';



function App() {
  return (

    <InputProvider>

      <div>
        <Header />
        <Inputs />
        <Tips />
        <Suggestion/>

      </div>

    </InputProvider>


  );

}

export default App;
