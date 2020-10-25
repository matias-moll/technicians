import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppItemRow from '../components/AppItemRow'

import Card from '../components/Card'
import ClientIcon from '../components/ClientIcon'
import Screen from '../components/Screen'
import appStyles from '../config/appStyles'
import colors from '../config/colors'

export default function ClientServices() {
  return (
    <Screen>
      <Card title='Planes Cliente'>
        <AppItemRow>
          <ClientIcon name='account'/>
          <Text style={appStyles.dataItem}> Cable Full HD </Text>
        </AppItemRow>
        <AppItemRow>
          <ClientIcon name='home'/>
          <Text style={appStyles.dataItem}> Internet 10 MB simetrico </Text>
        </AppItemRow>
        <AppItemRow>
          <ClientIcon name='phone'/>
          <Text style={appStyles.dataItem}> 455215 </Text>
        </AppItemRow>
        <AppItemRow>
          <ClientIcon name='phone'/>
          <Text style={appStyles.dataItem}> 4552544  </Text>
        </AppItemRow>
      </Card>

      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
      

      <Card title='Problemas Recurrentes'>
          <Text></Text>
      </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 5,
    marginTop:15
  },
  text: {
    color: colors.white,
    width: 'auto'
  }
})
