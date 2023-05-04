import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome: yup.string().required("Informe seu nome"),
  email: yup.string().email("Email Inválido").required("Informe seu email"),
  telefone: yup
    .string()
    .min(11, "Número Iválido")
    .required("Informe apenas números"),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogihand(data) {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo(a)!</Text>

      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur} // chamado quando o textinput é focado.
            placeholder="Digite seu nome"
          />
        )}
      />
      {errors.nome && (
        <Text style={styles.labelError}>{errors.nome?.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur} // chamado quando o textinput é tocado.
            placeholder="Digite seu email"
          />
        )}
      />
      {errors.email && (
        <Text style={styles.labelError}>{errors.email?.message}</Text>
      )}

      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur} // chamado quando o textinput é focado.
            placeholder="Digite seu telefone"
          />
        )}
      />
      {errors.telefone && (
        <Text style={styles.labelError}>{errors.telefone?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogihand)}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
