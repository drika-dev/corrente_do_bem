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

const VoluntarioList = () => {
    const [tableVoluntario, setTableVoluntario] = useState([]);
    const navigation = useNavigation();
  
    const fetchVoluntario = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "voluntarys"));
          const VoluntarioList = [];
      
          querySnapshot.forEach((doc) => {
            const Voluntarios = {
              id: doc.id,
              email: doc.data().email,
              name: doc.data().name,
              phone: doc.data().phone,
            };
      
            VoluntarioList.push(Voluntarios);
          });
      
          setTableVoluntario(VoluntarioList);
        } catch (error) {
          console.error("Erro ao buscar o voluntário:", error);
          Alert.alert(
            "Erro ao buscar o voluntário",
            "Ocorreu um erro ao buscar os voluntários. Por favor, tente novamente."
          );
        }
      };
  
    useEffect(() => {
      fetchVoluntario();
    }, []);
  
    const handleDelete = async (voluntarioId) => {
      try {
        await deleteDoc(doc(db, "voluntarys", voluntarioId));
        console.log("Voluntário deletado com ID:", voluntarioId);
  
        Alert.alert(
          "Voluntário deletado",
          "O voluntário foi deletado com sucesso!"
        );
  
        fetchVoluntario(); // Updated function call to fetchDoacao
      } catch (error) {
        console.error("Erro ao deletar voluntário:", error);
        Alert.alert(
          "Erro ao deletar voluntário",
          "Ocorreu um erro ao deletar o voluntário. Por favor, tente novamente."
        );
      }
    };
  
    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Text style={Style.title}>Lista de Serviços</Text>
        <View style={Style.tableContainer}>
          {tableVoluntario.map((Voluntarios) => (
            <View style={Style.row} key={Voluntarios.id}>
              <Text style={Style.cell}>{Voluntarios.email}</Text>
              <Text style={Style.cell}>{Voluntarios.name}</Text>
              <Text style={Style.cell}>{Voluntarios.phone}</Text>
              <TouchableOpacity
                style={Style.deleteButton}
                onPress={() => {
                  handleDelete(Voluntarios.id);
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
            navigation.navigate("CadastroVoluntario", {
                fetchVoluntario: fetchVoluntario,
            });
          }}
        >
          <Text style={Style.textbtn}>Cadastrar novo Serviço</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  export default VoluntarioList;
