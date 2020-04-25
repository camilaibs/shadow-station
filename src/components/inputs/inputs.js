import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import Suggestion from '../suggestion/ suggestion'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tips from '../tips/tips'
import {InputProvider} from '../../contexts/InputContext'
import {InputContext} from '../../contexts/InputContext'



const Content = styled.div`
    position: relative;
    padding: 3%;
    display: flex;
    flex-direction: column;
`;

const InputsContent = styled.div`
    position: relative;
    padding: 3%;
    width:15.5%;
    background-color: #f6f9ff;
    border-radius:7px;
`;

const CssSelect = styled.span`
margin-bottom:20px;
width:100px;
display:flex;

.MuiInputBase-root{
  min-width:200px;
}
`;


const Inputs = () => {

  const [inputsValue, setInputs] = useContext(InputContext);

  let obj = {
    inputValueClient: "-",
    inputValueFeature: "-",
    inputValueSubject: "-",
    contentValueSubject: "-",
    contentValueTips: "-",
    fade: false
  }
 

  const handleChangeClient = (event) => {
    obj.inputValueClient= event.target.value;
  }

  const handleChangeFeature = (event) => {
    obj.inputValueFeature= event.target.value;
  }
  
  const handleChangeSubject = (event) => {
    obj.inputValueSubject= event.target.value;
    
  }

  const createSuggestion = () => {
    obj.fade= true;
    setInputs(obj);
    console.log(inputsValue);

    }

  const clearSuggestion = () => {

    obj = {
      inputValueClient: "-",
      inputValueFeature: "-",
      inputValueSubject: "-",
      contentValueSubject: "-",
      contentValueTips: "-",
      fade: false
    }
    setInputs(obj);
    
  }

    return (
    

      <InputProvider>

        <Content>

          <InputsContent>

            <InputLabel>Escolha o tipo de cliente:</InputLabel>
            <CssSelect>
              <Select  onChange={handleChangeClient}>
                <MenuItem value="Avançado">Avançado</MenuItem >
                <MenuItem value="Iniciante">Iniciante</MenuItem >
              </Select>
            </CssSelect>

            <InputLabel> Escolha a funcionalidade:</InputLabel>
            <CssSelect>
              <Select onChange={handleChangeFeature}>
                <MenuItem value="Integração: RD Station Marketing">Integração: RD Station Marketing</MenuItem>
              </Select>
            </CssSelect>

            <InputLabel>Escolha o Assunto:</InputLabel>
            <CssSelect>
              <Select onChange={handleChangeSubject}>
                <MenuItem value="Combinação de campos">Combinação de Campos</MenuItem>
                <MenuItem value="Distribuição de Leads">Distribuição de leads</MenuItem>
              </Select>
            </CssSelect>
            <p><Button onClick="" variant="contained" color="primary" onClick={createSuggestion}>Gerar Sugestão</Button></p>
            <Button onClick="" variant="contained" color="default" onClick={clearSuggestion}>Limpar Sugestão</Button>
          </ InputsContent>
        </Content>

       </InputProvider>
      

    );

  }


export default Inputs;