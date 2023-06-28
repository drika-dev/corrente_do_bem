import React, { useState } from "react";
import { TextInput, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VoluntarioList from "./lista_voluntario";

import Style from "../../../styles/style";
import { db } from "../../service/firebase";

const Stack = createStackNavigator();

const CadastroVoluntario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleTelefoneChange = (text) => {
    setPhone(text);
  };

const handleSubmit = async () => {
  const novovoluntarys = {
    name: name,
    email: email,
    phone: phone,
  };

    try {
      const docRef = await addDoc(collection(db, "voluntarys"), novovoluntarys);
      console.log("voluntario cadastrado com o ID:", docRef.id);

      setName("");
      setEmail("");
      setPhone("");

      Alert.alert("Cadastro de voluntário efetuado", "O voluntário foi cadastrado com sucesso!");
      navigation.navigate("VoluntarioList");
    } catch (error) {
  console.error("Erro ao cadastrar voluntário:", error);
  Alert.alert(
    "Erro ao cadastrar voluntário",
    "Ocorreu um erro ao cadastrar o voluntário. Por favor, tente novamente."
  );
     }
};

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../../assets/trabalhador.jpg")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastre um Voluntário </Text>
      <TextInput
        style={Style.input}
        onChangeText={handleNameChange}
        value={name}
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
        value={phone}
        placeholder="Digite seu telefone"
      />

      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar Voluntário </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const VoluntarioNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="CadastroVoluntario" component={CadastroVoluntario} options={{ headerShown: false }} />
    <Stack.Screen name="VoluntarioList" component={VoluntarioList} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default VoluntarioNavigator;