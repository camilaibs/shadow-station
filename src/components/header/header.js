import React, { Component } from 'react';
import '../../App.css'

// import { Container } from './styles';

class Header extends Component {
  render() {

    return(

      <div id="header" class="header">
        <ul>
          <li><a href="#" class="fst-menu">Shadow Station</a></li>
          <li><a href="#">Consultar</a></li>
          <li><a href="#" class="user-header">Usuário logado</a></li>
        </ul> 
      </div>

      
    );
    
  }
}

export default Header;

