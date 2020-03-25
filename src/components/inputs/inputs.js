import React, { Component } from 'react';
import styled from 'styled-components'

const InputsContent = styled.div`
    position: relative;
    padding: 3%;
`;

const teste = "este é um teste";
const comboInputs = React.createContext();
let comb = {};


class Inputs extends Component {

  constructor(props) {
    super(props);
    //this.combo = this.combo.bind(this);
    
  }
  

  combo() {

    comb = {c1:document.getElementById("tClient").value,
            c2:document.getElementById("func").value,
            c3:document.getElementById("subject").value}

    if(comb.c1 == "Ancioso" && comb.c2 == "Integração: RD Station Marketing" && comb.c3 ==  "Combinação de campos"){

      document.getElementById("second").innerHTML= 
      
      "Inserir um texto explicando sobre combinação de campos"

    }

    

      
      


  }



  render() {
    return (

      <InputsContent>
      
      <p>      
        <label>
          Escolha o tipo de cliente:
          </label>
          <p></p>
          
          <select id="tClient">
          <option value="-">Selecione o tipo de cliente</option>
           <option value="Ancioso">Ancioso</option>
            <option value="Avançado">Avançado</option>
            <option value="Confuso">Confuso</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Insistente">Insistente</option>
          </select>
        
        </p>

        <p>
          <label>
          Escolha a funcionalidade:
          </label>
          <p></p>
          <select id="func">
          <option value="-">Selecione a funcionalidade</option>
            <option value="Integração: RD Station Marketing">Integração: RD Station Marketing</option>
          </select>
          </p>

          <p>
          <label>
          Escolha o Assunto:
          </label>
          <p></p>
          <select id="subject">
          <option value="-">Selecione o assunto</option>
            <option value="Combinação de campos">Combinação de Campos</option>
          </select>
          </p>
        <p>
        <input type="button" onClick={this.combo} value="Gerar Sugestão" />
        </p>
    
      </InputsContent>

   

    );


  }
}
export default Inputs;
