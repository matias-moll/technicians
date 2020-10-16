import { Link } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import colors from '../config/colors'
import AppIconButton from './AppIconButton'
import Card from './Card'

export default function WorkOrderNote({note}) {
  return (
    <Card title='Observación' iconName='note-text'>
      <View style={styles.dataItemRow}>
        <Text style={styles.dataSmall}>{note} ... </Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  dataItemRow: {
    flexDirection:'row',
    marginBottom:5,
    marginTop:5,
    alignItems: 'center'
  },
  data: {
    fontSize:18,
    flex: 1, 
    flexWrap: 'wrap'
  },
  dataSmall: {
    fontSize:14,
    flex: 1, 
    flexWrap: 'wrap'
  },
})
