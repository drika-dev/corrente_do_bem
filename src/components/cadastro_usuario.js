import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import Style from "../../styles/style";
import firebase from "../service/firebase";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };
  const handleSenhaChange = (password) => {
    setSenha(password);
  };

  //Autenticação com o firebase
  const loginFirebase = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(nome, email, senha)
      .then((userCredential) => {
        console.log("USER:" + userCredential);
      })
      .catch((error) => {
        console.log(" errorMessage:" + error);
      });
  };

  const cadastro = () => {
    alert("CADASTRO EFETUADO COM SUCESSO");
    console.log("Nome", nome);
    console.log("Email", email);
    console.log("Senha", senha);
  
    // Limpar os campos do formulário
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <View style={Style.container}>
      <Text> </Text>
      <Image
        style={Style.image_logo}
        source={require("../../assets/logo.png")}
      />
      <StatusBar style="auto" />
      <TextInput 
        placeholder="Seu Nome"
        onChangeText={handleNomeChange} 
        value={nome}
        style={Style.input}
      />
      <TextInput 
        placeholder="Seu Email"
        onChangeText={handleEmailChange} 
        value={email}
        style={Style.input} 
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Sua Senha"
        onChangeText={handleSenhaChange} 
        value={senha}
        style={Style.input}
      />

      <TouchableOpacity style={Style.botao} onPress={() => cadastro()}>
        <Text style={Style.buttonText}> Cadastrar </Text>
      </TouchableOpacity>
     </View>
  );
}
