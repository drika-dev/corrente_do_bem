import React, { useState } from "react";
import { TextInput, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DoacaoList from "./lista_doacao";

import Style from "../../../styles/style";
import { db } from "../../service/firebase";

const Stack = createStackNavigator();

const CadastroDoador = () => {
  const [doador, setDoador] = useState("");
  const [tipoItem, setTipoItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [data, setData] = useState("");

  const navigation = useNavigation();

  const handleDoadorChange = (text) => {
    setDoador(text);
  };

  const handleTipoItemChange = (text) => {
    setTipoItem(text);
  };

  const handleQuantidadeChange = (text) => {
    setQuantidade(text);
  };

  const handleDataChange = (text) => {
    setData(text);
  };

  const handleSubmit = async () => {
    const novoDoacoes = {
      doador: doador,
      tipoItem: tipoItem,
      quantidade: quantidade,
      data: data,
    
    };
  
    try {
      const docRef = await addDoc(collection(db, "doacoes"), novoDoacoes);
      console.log("Nome cadastardo com o ID:", docRef.id);

      setDoador("");
      setTipoItem("");
      setQuantidade("");
      setData("");

      Alert.alert("Doação realizada com sucesso", "Obrigado por sua doação!");
      navigation.navigate("DoacaoList");
     } catch (error) {
  console.error("Erro ao realizar sua doação:", error);
  Alert.alert(
    "Erro ao realizar sua doação",
    "Ocorreu um erro ao realizar sua doação. Por favor, tente novamente."
  );
     }
  };

  return (
      <ScrollView contentContainerStyle={Style.container}>
      <Image
        style={Style.image_logo}
        source={require("../../../assets/logo.png")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastro de Doações</Text>
      <TextInput
        style={Style.input}
        onChangeText={handleDoadorChange}
        value={doador}
        placeholder="Nome do doador"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleTipoItemChange}
        value={tipoItem}
        placeholder="Tipo de item doado"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleQuantidadeChange}
        value={quantidade}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      <TextInput
        style={Style.input}
        onChangeText={handleDataChange}
        value={data}
        placeholder="Data da doação"
      />
      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar doação</Text>
      </TouchableOpacity>
      </ScrollView>
    );
};

const DoacaoNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="CadastroDoador" component={CadastroDoador} options={{ headerShown: false }} />
    <Stack.Screen name="DoacaoList" component={DoacaoList} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default DoacaoNavigator;

