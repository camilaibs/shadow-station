import React, { Component } from 'react';
import './suggestion.css';
import styled, { keyframes } from 'styled-components'


const Content = styled.div`
    display:${props => props.fade ? 'flex' : 'none'};;
    padding: 1em;
    position: relative;
    width: 50%;
    bottom: 460px;
    left: 33%;    
    border-radius: 5px;
    background-color: #f6f9ff;
    flex-direction: column;
    visibility: ${props => props.fade ? 'visible' : 'hidden'};
    animation: ${props => props.fade ? fadeIn : fadeOut} 0.60s linear;
    transition: visibility 0.60s linear;
    
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

const FirstSg = styled.div`
  display: inline-block;
  position: relative;
  padding: 15px;
`;

const SecondSg = styled.div`
display: inline-block;
    position: relative;
    padding: 15px;
`;

const FinalSg = styled.div`
    display: inline-block;
    position: relative;
    padding: 15px;
`;

 class Suggestion extends Component {

  render() {
    return (
    <Content fade={this.props.fade}>

          <FirstSg>
            <p>Bom dia!</p>
            <p>Tudo bem com você?</p>
            <p>Eu me chamo current.user, faço parte do suporte do RD Station CRM e vou te ajudar com essa questão, ok?</p>
          </FirstSg>

          <SecondSg >
            <p>{this.props.clientType}</p>
            <p>{this.props.feature }</p>
            <p>{this.props.subject}</p>
          </SecondSg>

          <FinalSg>

            <p>Consegui te ajudar?</p>
            <p>Caso eu não tenha sido claro ou essa não era a sua dúvida, basta me chamar por aqui novamente que eu irei te ajudar!</p>
            <p>Se surgirem novas dúvidas diferentes deste assunto, basta abrir uma nova solicitação <a href="">clicando aqui.</a> :)</p> 
            <p>Abraços,</p>       
            
          </FinalSg>

        </Content>
    );
  }
}

export default Suggestion;