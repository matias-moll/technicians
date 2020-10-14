import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppButton from './AppButton'
import AppIconButton from './AppIconButton'
import Card from './Card'
import Icon from './Icon'

export default function WorkOrderDetails({detailsInfo}) {
  return (
    
      <View style={styles.clientInfoContainer}>
        <View style={styles.dataItemRow}>
          <Text style={styles.workOrderType}>Datos Extra</Text>  
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Cliente: </Text>
          <Text style={styles.data}> {detailsInfo.client} ({detailsInfo.clientNumber}) </Text>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Dirección: </Text>
          <Text style={styles.data}>{detailsInfo.address} </Text>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Teléfono: </Text>
          <Text style={styles.data}>{detailsInfo.phone} </Text>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Observación: </Text>
          <Text style={styles.data}></Text>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.data}> {detailsInfo.note} </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppIconButton title='Cliente' iconName='account' />
          <AppIconButton title='Mapa' iconName='google-maps' />
          <AppIconButton title='Notas' iconName='note-text' />
        </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  buttonsContainer:{
    flexDirection:'row',
    marginTop:10,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  dataItemRow: {
    flexDirection:'row',
    marginBottom:5,
    marginTop:5,
    alignItems: 'center'
  },
  fields: {
    fontSize:18,
    fontWeight:'bold',
  },
  data: {
    fontSize:16,
    flex: 1, 
    flexWrap: 'wrap'
  },
  clientInfoContainer:{
    paddingTop:10,
    padding:20
  },
  workOrderType: {
    fontSize:23,
    marginBottom: 5
  },
})
