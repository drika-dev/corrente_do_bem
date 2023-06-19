import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Style from "../../styles/style";
const CadastroDoacao = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [doador, setDoador] = useState("");
  const [tipoItem, setTipoItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [data, setData] = useState("");

  // Função para manipular o envio do formulário
  const handleSubmit = () => {
    // Realizar o envio dos dados para o servidor ou executar a lógica desejada
    console.log("Dados do formulário:", doador, tipoItem, quantidade, data);
    // Limpar os campos do formulário após o envio
    setDoador("");
    setTipoItem("");
    setQuantidade("");
    setData("");
  };

  return (
    <View style={Style.container}>
      <Image
        style={Style.image}
        source={require("../../assets/logo.png")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={Style.title}>Cadastro de Doações</Text>
      <TextInput
        style={Style.input}
        onChangeText={setDoador}
        value={doador}
        placeholder="Nome do doador"
      />
      <TextInput
        style={Style.input}
        onChangeText={setTipoItem}
        value={tipoItem}
        placeholder="Tipo de item doado"
      />
      <TextInput
        style={Style.input}
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      <TextInput
        style={Style.input}
        onChangeText={setData}
        value={data}
        placeholder="Data da doação"
      />
      <TouchableOpacity style={Style.botao} onPress={handleSubmit}>
        <Text style={Style.textbtn}>Cadastrar doação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroDoacao;
