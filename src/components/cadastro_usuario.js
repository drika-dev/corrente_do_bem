import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Alert } from "react-native";
import { collection, addDoc } from "firebase/firestore";


import Style from "../../styles/style";
import { db } from "../service/firebase"; 

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const cadastrarUsuario = async () => {
    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
  
    try {
      const docRef = await addDoc(collection(db, "usuarios"), novoUsuario);
      console.log("Usuário cadastrado com ID:", docRef.id);
  
      setNome("");
      setEmail("");
      setSenha("");
  
      Alert.alert("Cadastro de usuário efetuado", "O usuário foi cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      Alert.alert("Erro ao cadastrar usuário", "Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.");
    }
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

      <TouchableOpacity style={Style.botao} onPress={cadastrarUsuario}>
        <Text style={Style.buttonText}> Cadastrar </Text>
      </TouchableOpacity>
     </View>
  );
}
