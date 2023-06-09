import React, { useState } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";

import Style from "../../styles/style";

const Tela_principal = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}> Seja bem-vindo(a)! </Text>
     

      <Image
        style={Style.image_logo}
        source={require("../../assets/logo.png")} // caminho e nome do arquivo da imagem do projeto
      />

    <Text style={Style.title}> Sobre nós .... </Text>
      
    </View>
  );
};

export default Tela_principal;
