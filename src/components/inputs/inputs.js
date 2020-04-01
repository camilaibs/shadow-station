import React, { Component } from 'react';
import styled from 'styled-components'
import Suggestion from '../suggestion/ suggestion'

const InputsContent = styled.div`
    position: relative;
    padding: 3%;
`;


class Inputs extends Component {

 state ={

    inputValueCli:"",
    inputValueFea:"",
    inputValueSub: "",
    contValueSub:"",
    contValuetips:""
  }
  
  handleChangeCli = (event) =>  {
    this.setState({inputValueCli: event.target.value});
    
  }

  handleChangeFunc = (event) =>  {
    this.setState({inputValueFea: event.target.value});
  }

  handleChangeSub = (event) =>  {
    this.setState({inputValueSub: event.target.value});
  }
  
  render() {
    return (

      <InputsContent>
      <p>      
        <label>
          Escolha o tipo de cliente:
          </label>
          <p></p>
          
          <select value={this.state.inputValueCli} onChange={this.handleChangeCli}>
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
          <select value={this.state.inputValueFea} onChange={this.handleChangeFunc}>
          <option value="-">Selecione a funcionalidade</option>
            <option value="Integração: RD Station Marketing">Integração: RD Station Marketing</option>
          </select>
          </p>
          <p>
          <label>
          Escolha o Assunto:
          </label>
          <p></p>
          <select value={this.state.inputValueSub} onChange={this.handleChangeSub}>
          <option value="-">Selecione o assunto</option>
            <option value="Combinação de campos">Combinação de Campos</option>
          </select>
          </p>
        <p>
        <input type="button" onClick="" value="Gerar Sugestão" />
        </p>

        <div>
          <Suggestion clientType={this.state.inputValueCli} feature={this.state.inputValueFea} 
          subject={this.state.inputValueSub} />

        </div>
    
      </InputsContent>

    );

  }
}
export default Inputs;