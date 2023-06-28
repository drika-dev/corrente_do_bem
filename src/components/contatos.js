import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image} from "react-native";

export default function Contatos() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imginfo}
          source={require("../../assets/info.jpg")}
        />
        <StatusBar style="auto" />

        <Text style={styles.Text}><Text style={styles.bold}>Razão Social:</Text>ASSOCIACAO CORRENTE DO
          BEM DE PASSOS {"\n"}
          <Text style={styles.bold}>CNPJ:</Text> 40.898.027/0001-68{"\n"}
          <Text style={styles.bold}>Início das atividades:</Text> 18/02/2021
          {"\n"}
          <Text style={styles.bold}>Atividade principal: </Text>Atividades de
          Associações de Defesa de Direitos Sociais {"\n"}
          <Text style={styles.bold}>Entre em contato:</Text>
          {"\n"}
          <Text style={styles.bold}>email:
          </Text> correntedobempassos@gmail.com {"\n"}
          <Text style={styles.bold}>instagram:</Text> @correntedobempassosmg
        </Text>
        <Text style={styles.Text}>
          <Text style={styles.bold}>Faça parte desse milagre; </Text>
          {"\n"} PIX 40.898.027/0001-68
        </Text>
        <Text style={styles.Text}>
          <Text style={styles.bold}>“Unir pessoas para ajudar pessoas” </Text>
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  imginfo: {
    position: 'absolute',
    top:32,
    height:400,
    width:500,
    resizeMode: 'stretch'

  },
  Text: {
    top:460,
    margin:8,
    fontSize: 20,
    color: "gray",
    marginTop: 4,
    fontWeight: 'bold'
  },
  bold:{
    fontWeight: 'bold',
    color: '#B22222'
  }
});