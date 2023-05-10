import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import Style from "../../styles/style";

export default function Cadastro() {
    const [email, setEmai] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <View style={Style.container}>
            <Text> </Text>
            <Image
                style={Style.image_logo}
                source={require("../../assets/logo.png")}
            />
            <StatusBar style="auto" />
            <TextInput placeholder="Seu Email" value={email} style={Style.input} />
            <TextInput
                secureTextEntry={true}
                placeholder="Sua Senha"
                value={senha}
                style={Style.input}
            />


            <TouchableOpacity style={Style.botao} onPress={() => login()}>
                <Text style={Style.buttonText}> Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.botao} onPress={() => cadastro()}>
                <Text style={Style.buttonText}> Cadastrar </Text>
            </TouchableOpacity>
        </View>
    );
}
