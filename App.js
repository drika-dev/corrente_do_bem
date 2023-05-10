import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Cadastro_Usuario from "./src/components/cadastro_usuario";
import Cadastro_Permissao from "./src/components/cadastro_permissoes";
import Cadastro_Servico from "./src/components/cadastro_servico";
import Servicos_Feitos from "./src/components/servicos_feitos";
import Cadastro_voluntario from "./src/components/cadastro_voluntario";
import Login from "./src/components/login_usuario"

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#e8e8e7",
          width: 240,
          primary: "rgb(179, 129, 230)",
        },
      }}
    >
      <Drawer.Screen name="Página Inicial" component={Servicos_Feitos} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cadastrar Usuario" component={Cadastro_Usuario} />
      <Drawer.Screen
        name="Cadastrar Permissões"
        component={Cadastro_Permissao}
      />
      <Drawer.Screen name="Cadastrar Serviço" component={Cadastro_Servico} />
      <Drawer.Screen name="Cadastrar Voluntário" component={Cadastro_voluntario} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
