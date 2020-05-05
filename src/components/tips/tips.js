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
          <h2></h2>
          <h4></h4>            
        </TipsCont>
    );
  }
}

export default Tips