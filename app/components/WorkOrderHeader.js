import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

export default function WorkOrderHeader({headerInfo: headerInfo}) {
  return (
    <Card title={`Nro Orden: ${headerInfo.number}`} iconName='close-box'>
      <Text style={styles.workOrderType}>{headerInfo.orderType}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  workOrderType: {
    fontSize:22,
    marginBottom: 5,
    marginTop:5
  },
})
