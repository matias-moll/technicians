import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import Icon from './Icon'

export default function Card({title, iconName=null, children}) {
  return (
    <View style={styles.card}>
      <View style={styles.dataItemRow}>
          <Text style={styles.title}>{title}</Text>  
          <Text style={styles.fill}></Text>
          {iconName && <Icon name={iconName} size={25} backgroundColor={colors.white} iconColor={colors.black}/>}
      </View>
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
    paddingTop:5,
    paddingBottom: 10,
    padding:20,
    flex:1
  },
  dataItemRow: {
    flexDirection:'row',
    marginBottom:5,
    marginTop:5,
    alignItems: 'center'
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    paddingBottom: 5
  },
  fill: {
    flex: 1, 
  },
})
