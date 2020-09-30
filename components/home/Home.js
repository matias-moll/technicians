import React from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import {View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Orden de Trabajo"/>

      {/* Extract to a component: topWorkOrder */}
      <View style={styles.containerCardWorkOrder}>
        <View style={styles.topbarWorkOrderNumbers}>
          <Text style={styles.workOrderNumber}>Nro Orden: 154</Text>
          <Text style={styles.workOrderQuantity}>1/15</Text>
        </View>
        <View style={styles.workOrderTypeContainer}>
          <Text style={styles.workOrderType}>Reconexión Cable</Text>
        </View>
      </View>
        
      {/* Extract to a component: mainWorkOrder */}
      <View style={styles.containerCardWorkOrder}>
        <View style={styles.clientInfoContainer}>
          <View style={styles.dataItemRow}>
            <Text style={styles.fields}>Cliente: </Text>
            <Text style={styles.data}> Pepe Gonzales (45213) </Text>
          </View>
          <View style={styles.dataItemRow}>
            <Text style={styles.fields}>Teléfono: </Text>
            <Text style={styles.data}>011 2345-2145 </Text>
          </View>
          <View style={styles.dataItemRow}>
            <Text style={styles.fields}>Observación: </Text>
          </View>
          <View style={styles.dataItemRow}>
            <Text style={styles.data}>120 chars: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis. </Text>
          </View>
          <Button
            title="Test"
            onPress={() =>
            navigation.navigate('NewWorkOrder', { name: 'Jane' })}/>
        </View>
      </View>

      <MapView style={styles.mapStyles} />

      <Navigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ecf0f1'
  },
  containerCardWorkOrder:{
    margin:8,
    marginTop:15,
    marginBottom:0,
    elevation: 2,
    borderLeftColor:'#27AE60',
    borderLeftWidth:3,
    backgroundColor:'white',
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
    paddingTop:0,
    padding: 20,
  },
  workOrderType: {
    fontSize:24,
  },
  dataItemRow: {
    flexDirection:'row',
    marginBottom:5,
    marginTop:5,
  },
  fields: {
    fontSize:20,
    fontWeight:'bold',
  },
  data: {
    fontSize:20,
    flex: 1, 
    flexWrap: 'wrap'
  },
  clientInfoContainer:{
    paddingTop:10,
    padding:20
  },
  mapStyles: {
    width: Dimensions.get('window').width,
    height: 265,
    marginTop:10,
    borderTopWidth:2,
  }
})