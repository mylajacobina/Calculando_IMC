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
  font-size: 50px;
  text-align: center;
  font-weight: #363636;
  background-color: #00FFFF;

`;

const Subtitulo = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 5px;

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
  font-size: 20px;
  margin: 5px 0px 5px 5px;
`;

const Input = styled.TextInput`
  width: 165px;
  background-color: #E1E1E1;
  margin: 5px 0px 5px 5px;
  border-radius: 5px;
  color: #000;
  font-size: 18px;
  background-color: #00FFFF;
`;

const Botao = styled.View`
  flex: 1;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  width: 400px;
  height: 100px;

`;

const AreaResult  = styled.View`
  background-color: ${ props => props.cor};  
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
  const [peso, atualizarPeso] = useState("");
  const [altura, atualizarAltura] = useState("");
  const [imc, atualizarImc] = useState("");
  const [obesidade, atualizarObesidade] = useState("");
  const [cor, atualizarCor] = useState("blue")
  const calcularIMC = () => {
    const indice = (parseFloat(peso) / ( parseFloat(altura) * parseFloat(altura)));
    atualizarImc(indice.toFixed(1));
    if(indice < 18.5){
      atualizarObesidade ("magreza");
      atualizarCor("pink")
    }else if(indice >= 18.5 && indice <= 24.9){
      atualizarObesidade("normal");
      atualizarCor("orange")
    }else if(indice >= 25.0 && indice <= 29.9){
      atualizarObesidade("sobrepeso");
      atualizarCor("lilac")
    }else if(indice >= 30.0 && indice <= 39.9){
      atualizarObesidade("obesidade");
      atualizarCor("brown")
    }else{
      atualizarObesidade("obesidade grave");
      atualizarCor("green")
    }
  }

 
  

  return (
    <Pagina>
      <Head>
        <Titulo>IMC</Titulo>
        <Subtitulo>Veja a interpretação do IMC</Subtitulo>
      </Head>
        <Form>
          <Div>
            <Dados>Peso:</Dados>
            <Input value={peso} onChangeText={(peso) => atualizarPeso(peso)} keyboardType="numeric" />
          </Div>
          <Div>
            <Dados>Altura:</Dados>
            <Input value={altura} onChangeText={(altura) => atualizarAltura(altura)} keyboardType="numeric" />
          </Div>
        </Form>
        <Botao>
          <Button color="#595151" title="C A L C U L A R" onPress={calcularIMC}>
          </Button>
        </Botao>
        { imc > 0 && (
        <AreaResult cor = {cor}>
          <Resultado>{imc}</Resultado>
          <Resultado>{obesidade}</Resultado>
        </AreaResult>
        )
        }
    
    </Pagina> 
  );
}




