import React, { Component } from 'react';
import styled from 'styled-components'

const TipsCont = styled.div`

`;



 class Tips extends Component {

  state={

    typeclient:""
  
  }

  render() {

    return(
        <TipsCont>
          <h2>Dicas: Cliente <a id="typeclient"></a></h2>
            
            <div id="tips-content">[Gerar dicas dinamicas de acordo com a combinação acima]</div>
        </TipsCont>
    );
  }
}

export default Tips