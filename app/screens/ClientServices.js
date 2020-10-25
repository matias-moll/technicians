import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppItemRow from '../components/AppItemRow'

import Card from '../components/Card'
import ClientIcon from '../components/ClientIcon'
import Screen from '../components/Screen'
import appStyles from '../config/appStyles'
import colors from '../config/colors'

export default function ClientServices() {
  const clientServices = {
    cablePlan: 'Cable Full HD',
    internetPlan: 'Internet 10 MB simetrico',
    cablePrecint: 45215,
    internetPrecint: 35265,
    noServiceMessage: 'Servicio cortado por falta de pago',
    recurrentProblems: [
      {problem: 'Baja velocidad de internet'},
      {problem: 'Cortes de cable'},
    ]
  }
  return (
    <Screen>
      <Card title='Detalle Planes'>
        <AppItemRow>
          <ClientIcon name='monitor'/>
          <Text style={appStyles.dataItem}> {clientServices.cablePlan} </Text>
        </AppItemRow>
        <AppItemRow>
          <ClientIcon name='wifi'/>
          <Text style={appStyles.dataItem}> {clientServices.internetPlan} </Text>
        </AppItemRow>
        <AppItemRow>
          <ClientIcon name='transmission-tower'/>
          <Text style={appStyles.dataItem}>Precinto Cable: {clientServices.cablePrecint} </Text>
        </AppItemRow>
        <AppItemRow>
          <ClientIcon name='transmission-tower'/>
          <Text style={appStyles.dataItem}>Precinto IE: {clientServices.internetPrecint}  </Text>
        </AppItemRow>
      </Card>

      <View style={styles.container}>
        <Text style={styles.text}>{clientServices.noServiceMessage}</Text>
      </View>
      
      <Card title='Problemas Recurrentes'>
        { clientServices.recurrentProblems.map((problem, index) => (
          <AppItemRow key={index}>
            <ClientIcon name='arrow-right-drop-circle'/>
            <Text style={appStyles.dataItem}> {problem.problem} </Text>
          </AppItemRow>
        ))}
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
    marginTop:15,
    margin:8,
  },
  text: {
    color: colors.white,
    width: 'auto',
    fontSize:18,
  }
})
