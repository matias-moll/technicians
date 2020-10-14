import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import Card from './Card'
import Icon from './Icon'

export default function WorkOrderDetails({detailsInfo}) {
  return (
    <Card>
      <View style={styles.clientInfoContainer}>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Cliente: </Text>
          <Text style={styles.data}> {detailsInfo.client} ({detailsInfo.clientNumber}) </Text>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Dirección: </Text>
          <Text style={styles.data}>{detailsInfo.address} </Text>
          <Icon name='google-maps' size={35} backgroundColor={colors.white} iconColor={colors.black}/>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Teléfono: </Text>
          <Text style={styles.data}>{detailsInfo.phone} </Text>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.fields}>Observación: </Text>
          <Text style={styles.data}></Text>
          <Icon name='note-text' size={35} backgroundColor={colors.white} iconColor={colors.black}/>
        </View>
        <View style={styles.dataItemRow}>
          <Text style={styles.data}> {detailsInfo.note} </Text>
        </View>
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
})
