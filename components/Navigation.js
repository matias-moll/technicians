import React from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, Button, TouchableOpacity} from 'react-native';

export default function Navigation() {
  const onPress = () => alert("hi");
  return (
    <View style={styles.footer}>
      <View style={styles.buttonsPanel}>
        <TouchableOpacity style={styles.button} onPress={() => alert("hi")}>
         <Text> Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert("hi")}>
         <Text> Llegada </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert("hi")}>
         <Text> Final </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert("hi")}>
         <Text> Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert("hi")}>
         <Text> Nueva OT </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom:0,
    width: '100%',
    height: 40,
    backgroundColor:'black',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  buttonsPanel:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopColor:'#27AE60',
    borderTopWidth:2,
  }
})