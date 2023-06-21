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

      if (querySnapshot.empty) {
        Alert.alert("Usuário não encontrado", "O email fornecido não está cadastrado.");
        return;
      }

      const user = querySnapshot.docs[0].data();
      if (user.senha !== senha) {
        Alert.alert("Senha incorreta", "A senha fornecida está incorreta.");
        return;
      }

      await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário autenticado com sucesso!", user);
      Alert.alert("Autenticação bem-sucedida", "Você foi autenticado com sucesso!");
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      Alert.alert("Erro ao autenticar usuário", "Ocorreu um erro ao autenticar o usuário. Por favor, verifique seu email e senha.");
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
