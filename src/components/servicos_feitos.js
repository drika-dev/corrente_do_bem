import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Style from "../../styles/style";

const Servicos_feitos = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Obras Executadas </Text>
      <TextInput />

      <Image
        style={Style.image}
        source={require("../../assets/casa1.jpg")} // caminho e nome do arquivo da imagem do projeto
      />

      <Image
        style={Style.image}
        source={require("../../assets/imagen5.jpg")} // caminho e nome do arquivo da imagem do projeto
      />

      <Image
        style={Style.image}
        source={require("../../assets/casa8.jpg")} // caminho e nome do arquivo da imagem do projeto
      />

      <Image
        style={Style.image}
        source={require("../../assets/casa7.jpg")} // caminho e nome do arquivo da imagem do projeto
      />
    </View>
  );
};

export default Servicos_feitos;
