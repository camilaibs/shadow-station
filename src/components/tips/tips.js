import React, { Component } from 'react';
import styled from 'styled-components'

const TipsCont = styled.div`
   position:relative;
   margin-left:4.5%;
`;

 class Tips extends Component {

  state={

    typeclient:""
  
  }

  render() {

    return(
        <TipsCont>
          <h2>Dicas de Atendimento</h2>
          <h4>Em breve...</h4>            
        </TipsCont>
    );
  }
}

export default Tips