import React, { useContext} from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { InputProvider } from '../../contexts/InputContext'
import { InputContext } from '../../contexts/InputContext'
import { firebaseDatabase as firebase } from '../../util/firebase-react'

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

  const readDB = (client, feature, subject) => {

    firebase.ref('/' + client + '/0/feature/0/' + feature + '/' + subject).ref.once('value').then(function (snapshot) {

      setInputs((prevState) => ({
        ...prevState,
        suggestion: snapshot.val().suggestion,
        tips: snapshot.val().tips
      }));

    }).catch(function (error) {

      console.log("Gerou um erro ao carregar os dados do banco:");
      console.log(error);
    })

  }

  const handleChangeClient = (event) => {

    setInputs((prevState) => ({
      ...prevState,
      inputValueClient: event.target.value

    }));

  }
  const handleChangeFeature = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      inputValueFeature: event.target.value

    }));
  }

  const handleChangeSubject = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      inputValueSubject: event.target.value

    }));

  }

  const createSuggestion = () => {
    if (inputsValue.inputValueClient === "-" || inputsValue.inputValueFeature === "-" ||
      inputsValue.inputValueSubject === "-") {

      alert("Preencha todos os campos");

    } else {

      setInputs((prevState) => ({
        ...prevState,
        fade: true
      }));

      readDB(inputsValue.inputValueClient, inputsValue.inputValueFeature,
        inputsValue.inputValueSubject);
    }

  }

  const clearSuggestion = () => {

    setInputs(
      {
        inputValueClient: "-",
        inputValueFeature: "-",
        inputValueSubject: "-",
        contentValueSubject: "-",
        contentValueTips: "-",
        fade: false,
        suggestion: "",
        tips: ""
      });

  }
  return (
    <InputProvider>
      <Content>
        <InputsContent>
          <InputLabel>Escolha o tipo de cliente:</InputLabel>
          <CssSelect>
            <Select value={inputsValue.inputValueClient} id="client_id" onChange={handleChangeClient}>
              <MenuItem value="-">Selecione uma das opções</MenuItem >
              <MenuItem value="client_advanced">Avançado</MenuItem >
              <MenuItem value="client_beginner">Iniciante</MenuItem >
            </Select>
          </CssSelect>

          <InputLabel> Escolha a funcionalidade:</InputLabel>
          <CssSelect>
            <Select value={inputsValue.inputValueFeature} id="feature_id" onChange={handleChangeFeature}>
              <MenuItem value="-">Selecione uma das opções</MenuItem >
              <MenuItem value="RD_Station_Marketing">Integração: RD Station Marketing</MenuItem>
            </Select>
          </CssSelect>

          <InputLabel>Escolha o Assunto:</InputLabel>
          <CssSelect>
            <Select value={inputsValue.inputValueSubject} id="subject_id" onChange={handleChangeSubject}>
              <MenuItem value="-">Selecione uma das opções</MenuItem >
              <MenuItem value="combinação_de_campos">Combinação de Campos</MenuItem>
              <MenuItem value="distribuição_de_leads">Distribuição de leads</MenuItem>
            </Select>
          </CssSelect>

          <p><Button variant="contained" color="default" onClick={createSuggestion}>Gerar Sugestão</Button></p>
          <Button variant="contained" color="secondary" onClick={clearSuggestion}>Limpar Sugestão</Button>
        
        </ InputsContent>
      </Content>
    </InputProvider>
  );

}

export default Inputs;