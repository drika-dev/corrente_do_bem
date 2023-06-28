import React, { useState } from "react";
import { TextInput, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ServicoList from "./lista_servico";

import Style from "../../../styles/style";
import { db } from "../../service/firebase";

const Stack = createStackNavigator();

const CadastroServico = () => {
  const [name, setName] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const navigation = useNavigation();

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
        navigation.navigate("ServicoList");
       } catch (error) {
     console.error("Erro ao cadastrar serviço:", error);
     Alert.alert(
      "Erro ao cadastrar serviço",
      "Ocorreu um erro ao cadastrar o serviço. Por favor, tente novamente.");
       }
  };
  
  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../../assets/servico.png")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastre uma prestaçao de serviço </Text>
      <TextInput
        style={Style.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Digite seu nome"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleServicoChange}
        value={servico}
        placeholder="Qual será o serviço prestado?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handleDataChange}
        value={data}
        placeholder="Qual a data da prestaçao de serviço?"
      />

      <TextInput
        style={Style.input}
        onChangeText={handleHoraChange}
        value={hora}
        placeholder="Qual a hora da prestaçao de serviço?"
      />

      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar Serviço </Text>
      </TouchableOpacity>
      </ScrollView>
  );
};

const ServicoNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="CadastroServico" component={CadastroServico} options={{ headerShown: false }} />
    <Stack.Screen name="ServicoList" component={ServicoList} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default ServicoNavigator;