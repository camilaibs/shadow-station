import React, { Component } from 'react';
import styled from 'styled-components'

const TipsCont = styled.div`

`;

 class Tips extends Component {
  render() {
    return(
        <TipsCont>
            Dicas
            <p>[Gerar dicas dinamicas de acordo com a combinação acima]</p>
        </TipsCont>
    );
  }
}

export default Tips