import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import Style from "../../styles/style";
import firebase from "../service/firebase";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmai] = useState("");
  const [senha, setSenha] = useState("");

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
  useEffect(() => {}, []);

  const cadastro = () => {
    alert("CADASTRO EFETUADO COM SUCESSO");
  };

  const login = () => {
    alert("BEM VINDO A CORRENTE DO BEM");
  };
  return (
    <View style={Style.container}>
      <Text> </Text>
      <Image
        style={Style.image_logo}
        source={require("../../assets/logo.png")}
      />
      <StatusBar style="auto" />
      <TextInput placeholder="Seu Nome ..." style={Style.input} />
      <TextInput placeholder="Seu Email" style={Style.input} />
      <TextInput
        secureTextEntry={true}
        placeholder="Sua Senha"
        style={Style.input}
      />

      <TouchableOpacity style={Style.botao} onPress={() => cadastro()}>
        <Text style={Style.buttonText}> Cadastrar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.botao} onPress={() => login()}>
        <Text style={Style.buttonText}> Login</Text>
      </TouchableOpacity>
    </View>
  );
}
