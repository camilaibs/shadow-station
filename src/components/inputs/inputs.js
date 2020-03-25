import React, { Component } from 'react';
import styled from 'styled-components'

const InputsContent = styled.div`
    position: relative;
    padding: 3%;
`;



let comb = {};


class Inputs extends Component {

  constructor(props) {
    super(props);
  }
  
  combo() {

    comb = {c1:document.getElementById("tClient").value,
            c2:document.getElementById("func").value,
            c3:document.getElementById("subject").value}

    document.getElementById("typeclient").innerHTML = comb.c1;

    if(comb.c1 == "Ancioso" && comb.c2 == "Integração: RD Station Marketing" && comb.c3 ==  "Combinação de campos"){

      // conteúdo do meio da sugestão

      document.getElementById("second").innerHTML= 
      
      "Inserir um texto explicando sobre combinação de campos"

      //conteúdo da dica

      document.getElementById("tips-content").innerHTML= 
      
      "Dicas para clientes do tipo"+" "+comb.c1

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