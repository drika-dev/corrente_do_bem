import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Tela_principal from "./src/components/home";
import Cadastro_Usuario from "./src/components/cadastro_usuario";
import Cadastro_Permissao from "./src/components/permissao/cadastro_permissoes";
import Cadastro_Servico from "./src/components/cadastro_servico";
import Servicos_Feitos from "./src/components/servicos_feitos";
import Cadastro_voluntario from "./src/components/cadastro_voluntario";
import Cadastro_doacao from "./src/components/cadastro_doacao";
import Login from "./src/components/login_usuario";
import Mapa from "./src/components/maps";

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
      <Drawer.Screen name="Página Inicial" component={Tela_principal} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cadastrar Usuario" component={Cadastro_Usuario} />
      <Drawer.Screen name="Cadastrar Permissões" component={Cadastro_Permissao}/>
      <Drawer.Screen name="Cadastrar Serviço" component={Cadastro_Servico} />
      <Drawer.Screen name="Cadastrar Voluntário" component={Cadastro_voluntario} />
      <Drawer.Screen name="Cadastrar Doação" component={Cadastro_doacao} />      
      <Drawer.Screen name="Locais de Doação" component={Mapa} />
      <Drawer.Screen name="Serviços Executados" component={Servicos_Feitos} />

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
