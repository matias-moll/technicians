import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import Icon from './Icon'

export default function ClientIcon({name}) {
  return (
    <Icon name={name} size={25} iconColor={colors.black} backgroundColor={null} />
  )
}

const styles = StyleSheet.create({})
