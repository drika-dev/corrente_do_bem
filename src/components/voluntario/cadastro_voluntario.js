import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import Style from "../../styles/style";


const CadastroVoluntario = () => {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleTelefoneChange = (text) => {
    setTelefone(text);
  };


  const handleSubmit = () => {
    // Aqui será para fazer a lógica para enviar os dados de cadastro para o servidor
    console.log("Digite Seu Nome", nome);
    console.log("Email:", email);
    console.log("Telefone: ", telefone);
  };

  return (
    <View style={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../assets/trabalhador.jpg")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastre um Voluntário </Text>
      <TextInput
        style={Style.input}
        onChangeText={handleNameChange}
        value={nome}
        placeholder="Digite Seu Nome"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Qual seu e-mail ?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handleTelefoneChange}
        value={telefone}
        placeholder="Digite seu telefone"
      />


      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar Voluntário </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroVoluntario;
