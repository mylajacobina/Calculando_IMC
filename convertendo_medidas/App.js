import React, {useState} from 'react';
import {Text, Button, StyleSheet, SafeAreaView, View} from 'react-native';
import styled from 'styled-components/native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Head = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const Titulo = styled.Text`
  font-size: 40px;
  text-align: center;
  font-weight: bold;

`;

const Form = styled.View`
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  width: 350px;
  flex-direction: row;
`;

const Div = styled.View`
  width: 170px;
  margin: 2px 2px 2px 2px;
`;

const Dados = styled.Text`
  font-size: 27px;
  margin: 5px 0px 5px 5px;
  text-align: center;
  font-weight: bold;

`;

const Input = styled.TextInput`
  width: 165px;
  background-color: #E1E1E1;
  margin: 5px 0px 5px 5px;
  border-radius: 5px;
  color: #000;
  font-size: 18px;
  background-color:#4F4F4F;
`;

const Botao = styled.View`
  flex: 1;
  margin-top: 30px;
  padding-left: 25x;
  width: 200px;
  height: 100px;

`;

const AreaResult  = styled.View`
  background-color: #4F4F4F;  
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Resultado = styled.Text`
  font-size: 20px;
`;


export default function App() {
  const [medida, atualizarMedida] = useState();

  const calcularMedida = () => {
    atualizarMedida(parseFloat(medida) * 1000);

  }

 

  

  return (
    <Pagina>
      <Head>
        <Titulo>Convertendo Km/M</Titulo>
        
      </Head>
        <Form>
          <Div>
            <Dados>Quilômetros</Dados>
            <Input value={medida} onChangeText={(medida) => atualizarMedida(medida)} keyboardType="numeric" />
          </Div>
        
        </Form>
        <Botao>
          <Button color="#595151" title="C A L C U L A R" onPress={calcularMedida}>
          </Button>
        </Botao>
       
       { medida > 0 && (
        <AreaResult>
          <Resultado>{medida}</Resultado>
          <Resultado>Metros</Resultado>
         
        </AreaResult>
       )}
    </Pagina>
  );
}