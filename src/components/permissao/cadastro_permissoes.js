import React, { useState } from "react";
import { TextInput, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PermissionList from "./lista_permissao";

import Style from "../../../styles/style";
import { db } from "../../service/firebase";

const Stack = createStackNavigator();

const PermissionForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const navigation = useNavigation(); // Acesso à navegação

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSubmit = async () => {
    const novaPermissao = {
      NomePermissao: name,
      DescricaoPermissao: description,
    };

    try {
      await addDoc(collection(db, "permissions"), novaPermissao);
      console.log("Permissão cadastrada:", novaPermissao);

      setName("");
      setDescription("");

      Alert.alert("Cadastro de permissão efetuado", "A permissão foi cadastrada com sucesso!");

      navigation.navigate("PermissionList"); // Navega para a tela de lista de permissões
    } catch (error) {
      console.error("Erro ao cadastrar permissão:", error);
      Alert.alert(
        "Erro ao cadastrar permissão",
        "Ocorreu um erro ao cadastrar a permissão. Por favor, tente novamente."
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Image style={Style.image_logo} source={require("../../../assets/acesso.png")} />
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
        <Text style={Style.textbtn}>Cadastrar permissão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const PermissionNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="PermissionForm" component={PermissionForm} options={{ headerShown: false }} />
    <Stack.Screen name="PermissionList" component={PermissionList} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default PermissionNavigator;
