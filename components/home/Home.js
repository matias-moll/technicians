import React from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import {View,Text,StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Orden de Trabajo"/>
      <View style={styles.topbarWorkOrder}>
        <View style={styles.topbarWorkOrderNumbers}>
          <Text style={styles.workOrderNumber}>Nro Orden: 154</Text>
          <Text style={styles.workOrderQuantity}>1/15</Text>
        </View>
        <View style={styles.workOrderTypeContainer}>
          <Text style={styles.workOrderType}>Reconexión Cable</Text>
        </View>

      </View>
        

      <Navigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ecf0f1'
  },
  topbarWorkOrder:{
    margin:8,
    marginTop:15,
    elevation: 2,
    borderLeftColor:'#27AE60',
    borderLeftWidth:3,
  },
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
    paddingTop:10,
    padding: 20
  },
  workOrderType: {
    fontSize:24
  }
})