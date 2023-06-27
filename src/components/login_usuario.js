import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


import Style from "../../styles/style";
import { auth, db } from "../service/firebase";

export default function Login({ onAuthentication }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation(); // Obtenha o objeto de navegação

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
      // Invoke the callback function to notify the parent component about the successful authentication
      onAuthentication();
    } catch (error) {
      // Alerta erro no cadastro dentro do firebase 
      console.error("Erro ao autenticar usuário:", error);
      Alert.alert("ERRO AO AUTENTICAR USUÁRIO", "OCORREU UM ERRO AO AUTENTICAR O USUÁRIO. POR FAVOR, VERIFIQUE SEU EMAIL E SENHA.");
    }
  };
  const goToCadastro = () => {
    navigation.navigate("Cadastro de Usuário");
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
      <TouchableOpacity style={Style.botao} onPress={goToCadastro}>
      <Text style={Style.buttonText}> Cadastre-se</Text>
     </TouchableOpacity>
     
    </View>
  );
}
