import React, { useContext } from 'react';
import './suggestion.css';
import styled, { keyframes } from 'styled-components'
import { InputProvider } from '../../contexts/InputContext'
import { InputContext } from '../../contexts/InputContext'
import './suggestion.css'
import { template } from '@babel/core';

// bottom: 515px;
const Content = styled.div`
    display:${props => props.fade ? 'flex' : 'none'};;
    padding: 1em;
    position: relative;
    width: 58%;
    bottom: 430px;
    left: 33%;    
    border-radius: 5px;
    background-color: #f6f9ff;
    flex-direction: column;
    visibility: ${props => props.fade ? 'visible' : 'hidden'};
    animation: ${props => props.fade ? fadeIn : fadeOut} 0.60s linear;
    transition: visibility 0.60s linear;
    text-align: justify;
    box-shadow:  2px 2px 5px #c1c1c1;
    margin-bottom:50px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const FirstSuggestion = styled.div`
  display: inline-block;
  position: relative;
  padding: 30px;
  margin-bottom:-30px;
`;

const SecondSuggestion = styled.div`
    display: inline-block;
    position: relative;
    padding: 30px;
    margin-bottom:-50px;
    margin-top:-30px;
    z-index:4;
`;

const FinalSuggestion = styled.div`
    display: inline-block;
    position: relative;
    padding: 30px;
`;

const Suggestion = () => {

  const [inputsValue, setInputs] = useContext(InputContext);


  return (
    <InputProvider>

      <Content fade={!inputsValue.fade}>
        <center><h3>Sua sugestão aparecerá aqui em baixo:</h3>
          <img class="img-loading" src="https://media.giphy.com/media/3oriOiizS4Pmofj46A/giphy.gif" height="273" width="278" />
        </center>
      </Content>

      <Content fade={inputsValue.fade}>

        <FirstSuggestion>
          <p><i><b>[Bom dia/Boa tarde, Cliente]</b></i>, tudo bem com você?</p>
          <p>Eu me chamo <i><b>[Seu nome]</b></i>, faço parte do suporte do <b>RD Station CRM</b> e vou te ajudar com essa questão, ok?</p>
        </FirstSuggestion>

        <SecondSuggestion>
          <main></main>
        </SecondSuggestion>

        <FinalSuggestion>

          <p>Consegui te ajudar?</p>
          <p>Caso eu não tenha sido claro ou essa não era a sua dúvida, peço que retorne neste mesmo email, pois continuo à
            disposição para te ajudar! :) </p>
          <p>Abraços,</p>

        </FinalSuggestion>

      </Content>

    </InputProvider>
  );
}

export default Suggestion;
