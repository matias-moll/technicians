import React from 'react'
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
  title: 'Tecniquín',
};

const styles = StyleSheet.create({
  header:{
    height:70,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#27ae60',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
})