import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppIconButton from './AppIconButton'
import Card from './Card'
import ClientIcon from './ClientIcon'
import * as Linking from 'expo-linking';
import useLocation from '../hooks/useLocation'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import Routes from '../navigation/Routes'

export default function WorkOrderDetails({detailsInfo}) {
  const navigation = useNavigation()
  const location = useLocation();

  const onCallPressed = () =>{
    Linking.openURL('tel:+' + detailsInfo.phone);
  }
  const onMapPressed = () =>{
    // console.log('https://www.google.com/maps/@'+location.latitude+','+location.longitude+'z')
    Linking.openURL('https://www.google.com/maps/@-34.5889993,-58.4241284,15.5z');
  }

  const onDetailsPressed = () =>{
    navigation.navigate(Routes.CLIENT_DETAILS)
  }
  return (
    <Card title='Datos Cliente'>
      <View style={styles.dataItemRow}>
        <ClientIcon name='account'/>
        <Text style={styles.data}> {detailsInfo.client} ({detailsInfo.clientNumber}) </Text>
      </View>
      <View style={styles.dataItemRow}>
        <ClientIcon name='home'/>
        <Text style={styles.data}> {detailsInfo.address} </Text>
      </View>
      <View style={styles.dataItemRow}>
        <ClientIcon name='phone'/>
        <Text style={styles.data}> {detailsInfo.phone} </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppIconButton title='Detalles' iconName='account-card-details' onPress={onDetailsPressed}/>
        <AppIconButton title='Mapa' iconName='google-maps' onPress={onMapPressed} />
        <AppIconButton title='Llamar' iconName='cellphone' onPress={onCallPressed} />
      </View>
    </Card>
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
  data: {
    fontSize:16,
    flex: 1, 
    flexWrap: 'wrap',
    marginLeft: 5
  },
})
