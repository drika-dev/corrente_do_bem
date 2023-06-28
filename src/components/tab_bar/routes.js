import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import Contatos from '../contatos'
import CadastroDoacao from '../cadastro_doacao'
import Mapa from "../maps";
import CadastroVoluntario from "../cadastro_voluntario";
import CadastroServico from "../cadastro_servico";
import ServicosFeitos from "../servicos_feitos";
import CadastroPermissoes from "../permissao/cadastro_permissoes";

import CustomTabBar from './CustomTabBar';



const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false, //não aparecer o nome da tela lá emcima
            tabBarHideOnKeyboard: true, //caso abra o input, a tab bar some p o teclado aparecer
            tabBarShowLabel: false, //não aparecer o nome abaixo dos ícones na tab bar
            tabBarActiveTintColor:"#B22222", //cor do ícone ativado
        }}
        
        tabBar={ (props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Contatos" component={Contatos} options={{tabBarIcon: "home"}}/>
            <Tab.Screen name="Cadastro_doacao" component={CadastroDoacao} options={{tabBarIcon: "heart-plus"}}/>
            <Tab.Screen name="CadastroVoluntario" component={CadastroVoluntario} options={{tabBarIcon: "hands-pray"}}/>
            <Tab.Screen name="Maps" component={Mapa} options={{tabBarIcon: "google-maps"}}/>
            <Tab.Screen name="CadastroServico" component={CadastroServico} options={{tabBarIcon: "hand-saw"}}/>
            <Tab.Screen name="CadastroPermissoes" component={CadastroPermissoes} options={{tabBarIcon: "book-check"}}/>
            <Tab.Screen name="ServicosFeitos" component={ServicosFeitos} options={{tabBarIcon: "image-album"}}/>
        </Tab.Navigator>
    )
}