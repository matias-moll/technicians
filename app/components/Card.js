import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    margin:8,
    marginTop:15,
    marginBottom:0,
    elevation: 2,
    borderLeftColor:'#27AE60',
    borderLeftWidth:3,
    backgroundColor:'white',
  }
})
