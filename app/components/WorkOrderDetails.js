import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppIconButton from './AppIconButton'
import Card from './Card'
import ClientIcon from './ClientIcon'
import * as Linking from 'expo-linking';
import useLocation from '../hooks/useLocation'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import Routes from '../navigation/Routes'
import AppItemRow from './AppItemRow'
import colors from '../config/colors'
import appStyles from '../config/appStyles'

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
    navigation.navigate(Routes.CLIENT_SERVICES)
  }
  return (
    <Card title='Datos Cliente'>
      <AppItemRow>
        <ClientIcon name='account'/>
        <Text style={appStyles.dataItem}> {detailsInfo.client} ({detailsInfo.clientNumber}) </Text>
      </AppItemRow>
      <AppItemRow>
        <ClientIcon name='home'/>
        <Text style={appStyles.dataItem}> {detailsInfo.address} </Text>
      </AppItemRow>
      <AppItemRow>
        <ClientIcon name='phone'/>
        <Text style={appStyles.dataItem}> {detailsInfo.phone} </Text>
      </AppItemRow>
      <View style={styles.buttonsContainer}>
        <AppIconButton title='Servicios' iconName='account-card-details' onPress={onDetailsPressed}/>
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
})
