import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
 
const PermissionForm = () => {
  

  return (
     
    
    <View style={{ backgroundColor: "#696969", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <MapView style={{ width: '100%', height:'100%'}} 
     initialRegion={{
      latitude: -20.7185716,
      longitude: -46.61129811825,
      latitudeDelta: 0.0980,
      longitudeDelta: 0.0600

     }}
     >
    <Marker
    coordinate={{ latitude: -20.7185927, longitude: -46.61289051825}}
    title=" Ponto de Doação 1"
    description='Ponto de doaçao corrente do bem'

    
    />

    <Marker
     
    coordinate={{ latitude: -20.7311232, longitude: -46.61411151775}}
    title=" Ponto de Doação 2"
    description='Ponto de doaçao corrente do bem'
    />
 
    <Marker
     
     coordinate={{ latitude: -20.7500045, longitude: -46.6045293175}}
     title=" Ponto de Doação 3"
     description='Ponto de doaçao corrente do bem'
     />
 



     </MapView>
    
    </View>
  );
};




export default PermissionForm;