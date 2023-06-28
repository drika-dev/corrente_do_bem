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

const UsuarioList = () => {
    const [tableUsuario, setTableUsuario] = useState([]);
    const navigation = useNavigation();
  
    const fetchUsuario = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "usuarios"));
          const UsuarioList = [];
      
          querySnapshot.forEach((doc) => {
            const usuarios = {
              id: doc.id,
              email: doc.data().email,
              nome: doc.data().nome,
              senha: doc.data().senha,
            };
      
            UsuarioList.push(usuarios);
          });
      
          setTableUsuario(UsuarioList);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
          Alert.alert(
            "Erro ao buscar usuário",
            "Ocorreu um erro ao buscar as usuário. Por favor, tente novamente."
          );
        }
      };
  
    useEffect(() => {
        fetchUsuario();
    }, []);
  
    const handleDelete = async (usuarioId) => {
      try {
        await deleteDoc(doc(db, "usuarios", usuarioId));
        console.log("Usuário deletado com ID:", usuarioId);
  
        Alert.alert(
          "Usuário deletado",
          "O usuário foi deletado com sucesso!"
        );
  
        fetchUsuario(); // Updated function call to fetchDoacao
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        Alert.alert(
          "Erro ao deletar usuário",
          "Ocorreu um erro ao deletar a usuário. Por favor, tente novamente."
        );
      }
    };
  
    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Text style={Style.title}>Lista de Usuários</Text>
        <View style={Style.tableContainer}>
          {tableUsuario.map((usuarios) => (
            <View style={Style.row} key={usuarios.id}>
              <Text style={Style.cell}>{usuarios.email}</Text>
              <Text style={Style.cell}>{usuarios.nome}</Text>
              <Text style={Style.cell}>{usuarios.senha}</Text>
              <TouchableOpacity
                style={Style.deleteButton}
                onPress={() => {
                  handleDelete(usuarios.id);
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
            navigation.navigate("Cadastro", {
                fetchUsuario: fetchUsuario,
            });
          }}
        >
          <Text style={Style.textbtn}>Cadastrar novo usuário</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  export default UsuarioList;
