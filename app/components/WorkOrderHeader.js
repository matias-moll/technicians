import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

export default function WorkOrderHeader({headerInfo: headerInfo}) {
  return (
    <Card>
      <View style={styles.topbarWorkOrderNumbers}>
        <Text style={styles.workOrderNumber}>Nro Orden: {headerInfo.number}</Text>
        <Text >1/{headerInfo.quantity}</Text>
      </View>
      <View style={styles.workOrderTypeContainer}>
        <Text style={styles.workOrderType}>{headerInfo.orderType}</Text>
      </View>
  </Card>
  )
}

const styles = StyleSheet.create({
  topbarWorkOrderNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    paddingLeft:20,
    paddingRight:20,
  },
  workOrderNumber: {
    fontSize:20,
    fontWeight:'bold',
  },
  workOrderTypeContainer: {
    paddingTop:0,
    padding: 20,
  },
  workOrderType: {
    fontSize:24,
  },
})
