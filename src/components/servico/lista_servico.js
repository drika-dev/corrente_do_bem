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

const ServicoList = () => {
    const [tableServico, setTableServico] = useState([]);
    const navigation = useNavigation();
  
    const fetchServico = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "Servicos"));
          const ServicosList = [];
      
          querySnapshot.forEach((doc) => {
            const Servicos = {
              id: doc.id,
              data: doc.data().data,
              hora: doc.data().hora,
              name: doc.data().name,
              servico: doc.data().servico,
            };
      
            ServicosList.push(Servicos);
          });
      
          setTableServico(ServicosList);
        } catch (error) {
          console.error("Erro ao buscar o serviço:", error);
          Alert.alert(
            "Erro ao buscar o serviço",
            "Ocorreu um erro ao buscar os serviços. Por favor, tente novamente."
          );
        }
      };
  
    useEffect(() => {
        fetchServico();
    }, []);
  
    const handleDelete = async (servicoId) => {
      try {
        await deleteDoc(doc(db, "Servicos", servicoId));
        console.log("Serviço deletado com ID:", servicoId);
  
        Alert.alert(
          "Serviço deletado",
          "O serviço foi deletado com sucesso!"
        );
  
        fetchServico(); // Updated function call to fetchDoacao
      } catch (error) {
        console.error("Erro ao deletar serviço:", error);
        Alert.alert(
          "Erro ao deletar serviço",
          "Ocorreu um erro ao deletar o serviço. Por favor, tente novamente."
        );
      }
    };
  
    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Text style={Style.title}>Lista de Serviços</Text>
        <View style={Style.tableContainer}>
          {tableServico.map((Servicos) => (
            <View style={Style.row} key={Servicos.id}>
              <Text style={Style.cell}>{Servicos.data}</Text>
              <Text style={Style.cell}>{Servicos.hora}</Text>
              <Text style={Style.cell}>{Servicos.name}</Text>
              <Text style={Style.cell}>{Servicos.servico}</Text>
              <TouchableOpacity
                style={Style.deleteButton}
                onPress={() => {
                  handleDelete(Servicos.id);
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
            navigation.navigate("CadastroServico", {
                fetchServico: fetchServico,
            });
          }}
        >
          <Text style={Style.textbtn}>Cadastrar novo Serviço</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  export default ServicoList;
