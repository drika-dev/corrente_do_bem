import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../service/firebase";

import Style from "../../../styles/style";

const PermissionList = () => {
  const [tableData, setTableData] = useState([]);
  const navigation = useNavigation();

  const fetchPermissions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "permissions"));
      const permissions = [];
  
      querySnapshot.forEach((doc) => {
        const permission = {
          id: doc.id,
          NomePermissao: doc.data().NomePermissao,
          DescricaoPermissao: doc.data().DescricaoPermissao,
        };
  
        permissions.push(permission);
      });
  
      setTableData(permissions);
    } catch (error) {
      console.error("Erro ao buscar permissões:", error);
      Alert.alert(
        "Erro ao buscar permissões",
        "Ocorreu um erro ao buscar as permissões. Por favor, tente novamente."
      );
    }
  };

  useEffect(() => {
    fetchPermissions(); // Chama a função fetchPermissions
  }, []);

  const handleDelete = async (permissionId) => {
    try {
      await deleteDoc(doc(db, "permissions", permissionId));
      console.log("Permissão deletada com ID:", permissionId);

      Alert.alert("Permissão deletada", "A permissão foi deletada com sucesso!");

      fetchPermissions(); // Atualiza a lista de permissões após deletar
    } catch (error) {
      console.error("Erro ao deletar permissão:", error);
      Alert.alert("Erro ao deletar permissão", "Ocorreu um erro ao deletar a permissão. Por favor, tente novamente.");
    }
  };

  const handleUpdate = async (permissionId, newName, newDescription) => {
    try {
      const permissionRef = doc(db, "permissions", permissionId);
      await updateDoc(permissionRef, {
        NomePermissao: newName,
        DescricaoPermissao: newDescription,
      });

      console.log("Permissão atualizada com ID:", permissionId);

      Alert.alert("Permissão atualizada", "A permissão foi atualizada com sucesso!");

      fetchPermissions(); // Atualiza a lista de permissões após atualizar
    } catch (error) {
      console.error("Erro ao atualizar permissão:", error);
      Alert.alert(
        "Erro ao atualizar permissão",
        "Ocorreu um erro ao atualizar a permissão. Por favor, tente novamente."
      );
    }
  }; 

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Text style={Style.title}>Lista de Permissões</Text>
      <View style={Style.tableContainer}>
        {tableData.map((permission) => (
          <View style={Style.row} key={permission.id}>
            <Text style={Style.cell}>{permission.NomePermissao}</Text>
            <Text style={Style.cell}>{permission.DescricaoPermissao}</Text>
            <TouchableOpacity
              style={Style.editButton}
              onPress={() => {
                navigation.navigate("PermissionNavigator", {
                  permissionId: permission.id,
                  name: permission.NomePermissao,
                  description: permission.DescricaoPermissao,
                  handleUpdate: handleUpdate,
                  fetchPermissions: fetchPermissions, // Passa a função fetchPermissions como propriedade
                });
              }}
            >
              <Text style={Style.editButtonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.deleteButton}
              onPress={() => {
                handleDelete(permission.id);
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
          navigation.navigate("PermissionForm", {
            fetchPermissions: fetchPermissions,
          });
        }}
      >
        <Text style={Style.textbtn}>Cadastrar nova permissão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PermissionList;
