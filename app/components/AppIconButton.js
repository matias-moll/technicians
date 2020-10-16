import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors';
import Icon from './Icon';

export default function AppIconButton({title, onPress, color = 'secondary', iconName, customStyles ={}}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}, customStyles]} onPress={onPress}>
      {iconName && <Icon name={iconName} size={20} iconColor='white' backgroundColor={null} /> }
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    padding: 8,
    margin: 5
  },
  text: {
    paddingLeft:5,
    color: colors.white,
    fontSize: 15
  }
})
