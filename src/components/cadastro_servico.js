import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import Style from "../../styles/style";


const CadastroServico = () => {
  const [name, setName] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleServicoChange = (text) => {
    setServico(text);
  };

  const handleDataChange = (text) => {
    setData(text);
  };

  const handleHoraChange = (text) => {
    setHora(text);
  };

  const handleSubmit = () => {
    // Aqui será para fazer a lógica para enviar os dados de cadastro para o servidor
    console.log("Digite Seu Nome", name);
    console.log("Qual sera o serviço prestado ?", servico);
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
        onChangeText={handleServicoChange}
        value={servico}
        placeholder="Qual sera o serviço prestado ?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handleDataChange}
        value={data}
        placeholder="Qual a data da prestaçao de serviço ?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handleHoraChange}
        value={hora}
        placeholder="Qual a hora da prestaçao de serviço ?"
      />

      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar Serviço </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroServico;
