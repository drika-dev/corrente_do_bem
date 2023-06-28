import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../service/firebase";

import Style from "../../../styles/stylePermission";

const DoacaoList = () => {
    const [tableDoacao, setTableDoacao] = useState([]);
    const navigation = useNavigation();
  
    const fetchDoacao = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "doacoes"));
          const doacoesList = [];
      
          querySnapshot.forEach((doc) => {
            const doacao = {
              id: doc.id,
              doador: doc.data().doador,
              tipoItem: doc.data().tipoItem,
              quantidade: doc.data().quantidade,
              data: doc.data().data,
            };
      
            doacoesList.push(doacao);
          });
      
          setTableDoacao(doacoesList);
        } catch (error) {
          console.error("Erro ao buscar doação:", error);
          Alert.alert(
            "Erro ao buscar doação",
            "Ocorreu um erro ao buscar as doação. Por favor, tente novamente."
          );
        }
      };
  
    useEffect(() => {
        fetchDoacao();
    }, []);
  
    const handleDelete = async (doacaoId) => {
      try {
        await deleteDoc(doc(db, "doacoes", doacaoId));
        console.log("Doação deletada com ID:", doacaoId);
  
        Alert.alert(
          "Doação deletada",
          "A doação foi deletada com sucesso!"
        );
  
        fetchDoacao(); // Updated function call to fetchDoacao
      } catch (error) {
        console.error("Erro ao deletar doação:", error);
        Alert.alert(
          "Erro ao deletar doação",
          "Ocorreu um erro ao deletar a doação. Por favor, tente novamente."
        );
      }
    };
  
    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Text style={Style.title}>Lista de Doações</Text>
        <View style={Style.tableContainer}>
          {tableDoacao.map((doacao) => (
            <View style={Style.row} key={doacao.id}>
              <Text style={Style.cell}>{doacao.doador}</Text>
              <Text style={Style.cell}>{doacao.tipoItem}</Text>
              <Text style={Style.cell}>{doacao.quantidade}</Text>
              <Text style={Style.cell}>{doacao.data}</Text>
              <TouchableOpacity
                style={Style.deleteButton}
                onPress={() => {
                  handleDelete(doacao.id);
                }}
              >
                <Text style={Style.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={Style.botao}
          onPress={() => {
            navigation.navigate("CadastroDoador", {
                fetchDoacao: fetchDoacao,
            });
          }}
        >
          <Text style={Style.textbtn}>Cadastrar nova doação</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  export default DoacaoList;
