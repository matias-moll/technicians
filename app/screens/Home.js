import React from 'react'
import {View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import WorkOrderDetails from '../components/WorkOrderDetails';
import WorkOrderHeader from '../components/WorkOrderHeader';
import Routes from '../navigation/Routes';

const workOrder = {
    headerInfo: {
      number: 155,
      quantity: 14,
      orderType: 'Reconexión Cable'
    },
    detailsInfo: {
      client: 'John Doe',
      clientNumber: 13452,
      address: 'Mankato Mississippi 96522',
      phone: '011 2312-7854',
      note: 'Lorem 40 sum dolor sit amet consectetur adipisicing elit. Illo ut laudantium nostrum cum aspernatur illum, modi dolore ducimus incidunt explicabo architecto non, ex labore sunt nulla quis velit dolorem perferendis quam quia id, consectetur reiciendis sed molestias! Accusamus, facilis odit!'
    },
    operationalTimes:{
      confirmed: new Date(),
      arrivedToAddress: null,
      finished: null
    }
}

export default function Home({ navigation }) {
  const [arrived, setArrived] = React.useState()
  const [finish, setFinish] = React.useState()
  
  const onConfirmPressed = () => {
    alert("confirmado")
    setArrived(new Date())
  }
  const onArrivedPressed = () => {
    alert("Llegada a domicilio")
    setFinish(new Date())
  }
  const onFinishPressed = () => {
    alert("Orden de trabajo finalizada")
    navigation.navigate(Routes.FINISH_WORK_ORDER)
  }

  return (
    <View style={styles.container}>
      <WorkOrderHeader headerInfo={workOrder.headerInfo} />
      <WorkOrderDetails detailsInfo={workOrder.detailsInfo} />
      <View style={styles.buttonsContainer}>
        {workOrder.operationalTimes.confirmed && !arrived &&
        <AppButton customStyles={styles.operationalButton} title='Confirmar' onPress={onConfirmPressed}/>}
        {arrived && !finish &&
        <AppButton customStyles={styles.operationalButton} title='Llegada a Domicilio' onPress={onArrivedPressed}/>}
        {finish && 
        <AppButton customStyles={styles.operationalButton} title='Finalizar' onPress={onFinishPressed}/>}

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ecf0f1'
  },
  buttonsContainer:{
    flex:1,
    justifyContent:'flex-end'
  },
  operationalButton:{
    width:300,
    alignSelf:'center',
    borderRadius: 0,
  }
})