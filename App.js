import React from "react";
import { TextInput, View } from "react-native";
import { StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.descricao}> Cadastro </Text>
      <TextInput style={styles.inputs} > Email</TextInput>
      <TextInput style={styles.inputs} secureTextEntry={true} value="Senha">
        {"*"}
        Senha
      </TextInput>
      <Text style={styles.botao_login}> Efetuar Login </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",//plano de fundo
    justifyContent: "center",//formatando posição do objeto na tela->centralizado
    flex: 1,
    alignItems: "center" //alinhamento dos itens-> centralizado
  },
  descricao: {
    fontFamily: 'normal', //Fonte do texto
    fontSize: 20, // tamanho da fonte
    color: "blue" // cor da fonte
  },
  inputs: {
    fontFamily: 'normal', // fonte do texto
    fontSize: 10, // tamanho da fonte
    color: 'red' // cor da fonte
  },
  botao_login:{
    borderRadius: 15, // tamanho da fonte
    color: 'purple', // cor da fonte
    backgroundColor: 'gray' //cor do plano de fundo
  }
});
