import React from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import {View,Text,StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Orden de Trabajo"/>

      <Navigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ecf0f1'
  },
})