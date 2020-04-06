import React, { Component } from 'react';
import './suggestion.css';
import styled from 'styled-components'
import Inputs from '../inputs/inputs'

const Content = styled.div`
    padding: 1em;
    background: papayawhip;
    position: relative;
    width: 50%;
    bottom: 300px;
    left: 33%;    
`;

const FirstSg = styled.div`
    position: relative;
    padding: 15px;
`;
const SecondSg = styled.div`
    position: relative;
    padding: 15px;
`;

const FinalSg = styled.div`
    position: relative;
    padding: 15px;
`;

 class Suggestion extends Component {

  render() {
    return (
    
    <Content>
          
          <FirstSg>
            <p>Bom dia!</p>
            <p>Tudo bem com você?</p>
            <p>Eu me chamo current.user, faço parte do suporte do RD Station CRM e vou te ajudar com essa questão, ok?</p>
          </FirstSg>

          <SecondSg  id="second">
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