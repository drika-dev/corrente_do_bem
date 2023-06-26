import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Alert} from "react-native";
import { collection, addDoc } from "firebase/firestore";

import Style from "../../styles/style";
import { db } from "../service/firebase"; 

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

  const handleSubmit = async () => {
    const novoServicos = {
      name: name,
      servico: servico,
      data: data,
      hora: hora,
    };

   try {
    const docRef = await addDoc(collection(db, "Servicos"), novoServicos);
        console.log("Serviço cadastardo com o ID:", docRef.id);

        setName("");
        setServico("");
        setData("");
        setHora("");

        Alert.alert("Cadastro de serviço efetuado", "O serviço foi cadastrado com sucesso!");
       } catch (error) {
     console.error("Erro ao cadastrar serviço:", error);
     Alert.alert(
      "Erro ao cadastrar serviço",
      "Ocorreu um erro ao cadastrar o serviço. Por favor, tente novamente.");
       }
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
