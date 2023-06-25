import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

import Style from "../../styles/style";
import { auth, db } from "../service/firebase";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const login = async () => {
    try {
      const usuariosRef = collection(db, "usuarios");
      const usuariosQuery = query(usuariosRef, where("email", "==", email));
      const querySnapshot = await getDocs(usuariosQuery);
      // Alerta de erro email nao cadastrado
      if (querySnapshot.empty) {
        Alert.alert("USUÁRIO NÃO ENCONTRADO", "O EMAIL FORNECIDO NÃO ESTÁ CADASTRADO.");
        return;
      }
      // Alerta de senha incorreta
      const user = querySnapshot.docs[0].data();
      if (user.senha !== senha) {
        Alert.alert("SENHA INCORRETA", "A SENHA FORNECIDA ESTÁ INCORRETA.");
        return;
      }

      await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário autenticado com sucesso!", user);
      // alerta de autenticação
      Alert.alert("AUTENTICAÇÃO BEM-SUCEDIDA", "VOCÊ FOI AUTENTICADO COM SUCESSO!");
    } catch (error) {
      // Alerta erro no cadastro dentro do firebase 
      console.error("Erro ao autenticar usuário:", error);
      Alert.alert("ERRO AO AUTENTICAR USUÁRIO", "OCORREU UM ERRO AO AUTENTICAR O USUÁRIO. POR FAVOR, VERIFIQUE SEU EMAIL E SENHA.");
    }
  };

  return (
    <View style={Style.container}>
      <Text> </Text>
      <Image
        style={Style.image_logo}
        source={require("../../assets/login.jpg")}
      />
      <StatusBar style="auto" />
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

      <TouchableOpacity style={Style.botao} onPress={login}>
        <Text style={Style.buttonText}> Login</Text>
      </TouchableOpacity>
    </View>
  );
}
