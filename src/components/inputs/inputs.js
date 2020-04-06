import React, { Component } from 'react';
import styled from 'styled-components'
import Suggestion from '../suggestion/ suggestion'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const Content = styled.div`
    position: relative;
    padding: 3%;
    display: flex;
    flex-direction: column;
`;

const InputsContent = styled.div`
    display: flex;
    position: relative;
    padding: 3%;
    width:20%;
    flex-direction: column;
    background-color: #f6f9ff;
    border-radius:7px;
    padding-right:5%;
`;

const CssSelect = styled.span`
margin-bottom:20px;
width:100px;
display:flex;

.MuiInputBase-root{
  min-width:200px;
}
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

      <Content>
      
      <InputsContent>
      

      <InputLabel>Escolha o tipo de cliente:</InputLabel>
      <CssSelect>
      <Select  value={this.state.inputValueCli} onChange={this.handleChangeCli}>
          <MenuItem value="-" >Selecione o tipo de cliente</MenuItem >
          <MenuItem value="Ancioso">Ancioso</MenuItem >
          <MenuItem value="Avançado">Avançado</MenuItem >
          <MenuItem value="Confuso">Confuso</MenuItem >
          <MenuItem value="Iniciante">Iniciante</MenuItem >
          <MenuItem value="Insistente">Insistente</MenuItem >
      </Select>
      </CssSelect>
      
      <InputLabel> Escolha a funcionalidade:</InputLabel>
      <CssSelect>
      <Select value={this.state.inputValueFea} onChange={this.handleChangeFunc}>
        <MenuItem value="-">Selecione a funcionalidade</MenuItem>
        <MenuItem value="Integração: RD Station Marketing">Integração: RD Station Marketing</MenuItem>
      </Select>
      </CssSelect>
      
      <InputLabel>Escolha o Assunto:</InputLabel>
      <CssSelect>
      <Select value={this.state.inputValueSub} onChange={this.handleChangeSub}>
        <MenuItem value="-">Selecione o assunto</MenuItem>
        <MenuItem value="Combinação de campos">Combinação de Campos</MenuItem>
      </Select>
      </CssSelect>
      <Button onClick="" variant="contained" color="primary">Gerar Sugestão</Button>
      </ InputsContent>
      
      <div>
          <Suggestion clientType={this.state.inputValueCli} feature={this.state.inputValueFea} 
          subject={this.state.inputValueSub}/> 
      </div>
    
      </Content>

    );

  }
}
export default Inputs;