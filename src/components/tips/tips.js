import React, { Component } from 'react';
import styled from 'styled-components'

const TipsCont = styled.div`
   position:relative;
   

`;



 class Tips extends Component {

  state={

    typeclient:""
  
  }

  render() {

    return(
        <TipsCont>
          <h2>Dicas de Atendimento</h2>
          <h3>Cliente {this.props.clientType}</h3>            
        </TipsCont>
    );
  }
}

export default Tips