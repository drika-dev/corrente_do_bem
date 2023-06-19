import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Alert } from "react-native";
import { collection, addDoc } from "firebase/firestore";

import Style from "../../styles/style";
import db from "../service/firebase";

const PermissionForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
      const docRef = await addDoc(collection(db, "permissions"), novaPermissao);
      console.log("Permissão cadastrada com ID:", docRef.id);

      setName("");
      setDescription("");

      Alert.alert("Cadastro de permissão efetuado", "A permissão foi cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar permissão:", error);
      Alert.alert("Erro ao cadastrar permissão", "Ocorreu um erro ao cadastrar a permissão. Por favor, tente novamente.");
    }
  };

  return (
    <View style={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../assets/acesso.png")}
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
        <Text style={Style.textbtn}>Cadastrar permissão</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionForm;