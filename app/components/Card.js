import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppItemRow from './AppItemRow'
import Icon from './Icon'

export default function Card({title, iconName=null, children}) {
  return (
    <View style={styles.card}>
      <AppItemRow>
          <Text style={styles.title}>{title}</Text>  
          <Text style={styles.fill}></Text>
          {iconName && <Icon name={iconName} size={25} backgroundColor={colors.white} iconColor={colors.black}/>}
      </AppItemRow>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    margin:8,
    marginTop:10,
    marginBottom:0,
    elevation: 2,
    borderLeftColor:'#27AE60',
    borderLeftWidth:3,
    backgroundColor:'white',
    paddingTop:3,
    paddingBottom: 10,
    padding:20,
    flex:1
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    paddingBottom: 3
  },
  fill: {
    flex: 1, 
  },
})
