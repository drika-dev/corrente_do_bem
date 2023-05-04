import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import Style from "../../styles/style";
const PermissionForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setdata] = useState("");
  const [hora, sethora] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handledataChange = (text) => {
    setdata(text);
  };

  const handlehoraChange = (text) => {
    sethora(text);
  };

  const handleSubmit = () => {
    // Aqui será para fazer a lógica para enviar os dados de cadastro para o servidor
    console.log("Digite Seu Nome", name);
    console.log("Qual sera o serviço prestado ?", description);
    console.log("Qual a data da prestaçao de serviço ?", data);
    console.log("Qual a hora da prestaçao de serviço ?", hora);
  };

  return (
    <View style={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../assets/servico.png")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastre Uma Prestaçao de Serviço </Text>
      <TextInput
        style={Style.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Digite Seu Nome"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleDescriptionChange}
        value={description}
        placeholder="Qual sera o serviço prestado ?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handledataChange}
        value={data}
        placeholder="Qual a data da prestaçao de serviço ?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handlehoraChange}
        value={hora}
        placeholder="Qual a hora da prestaçao de serviço ?"
      />

      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar Serviço </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionForm;
