import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";

import Style from "../../styles/style";

const PermissionForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSubmit = () => {
    // Aqui será para fazer a lógica para enviar os dados de cadastro para o servidor
    console.log("Nome", name);
    console.log("Descrição:", description);
  };

  return (
    <View style={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../assets/acesso.png")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastro de Permissão de Usuários</Text>
      <TextInput
        style={Style.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Nome da permissão"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleDescriptionChange}
        value={description}
        placeholder="Descrição da permissão"
      />
      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar permissão </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionForm;
