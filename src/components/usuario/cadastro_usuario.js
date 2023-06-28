import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsuarioList from "./lista_usuario";

import Style from "../../../styles/style";
import { db } from "../../service/firebase";

const Stack = createStackNavigator();

const Cadastro = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

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
      navigation.navigate("UsuarioList");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      Alert.alert("Erro ao cadastrar usuário", "Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.");
    }
  };

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Text> </Text>
      <Image
        style={Style.image_logo}
        source={require("../../../assets/logo.png")}
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
     </ScrollView>
  );
};

const UsuarioNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    <Stack.Screen name="UsuarioList" component={UsuarioList} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default UsuarioNavigator;