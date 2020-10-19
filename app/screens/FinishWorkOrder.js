import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import AppIconButton from '../components/AppIconButton'
// import ExpoPixi from 'expo-pixi'

import AppItemRow from '../components/AppItemRow'
import Card from '../components/Card'
import Screen from '../components/Screen'

export default function FinishWorkOrder() {
  const [amount, setAmount] = React.useState()
  const onChangeAmount = (textNumber) =>{
    if(textNumber){
      setAmount(textNumber)
    }else{
      setAmount(null)
    }
  }

  // clearCanvas = () => {
  //   this.refs.signatureCanvas.clear()
  // }
  // saveCanvas = async () => {
  //   const signature_result = await
  //   this.refs.signatureCanvas.takeSnapshotAsync({
  //     format: 'jpeg', // 'png' also supported
  //     quality: 0.5, // quality 0 for very poor 1 for very good
  //     result: 'file' // 
  //   })
  //   //yourFnToSaveItInYourAPI(signature_result)
  //   // inside the fn above, use signature_result.uri to get the absolute file path
  // }

  return (
    <Screen>
      <Card title='Cierre Técnico'>
      <AppItemRow>
        <Text>Importe</Text>
      </AppItemRow>
      <AppItemRow style={styles.itemRowTogether}>
        {amount && <Text>$</Text>}
        <TextInput 
          keyboardType="numeric" 
          placeholder="Ingrese el importe cobrado" 
          value={amount} 
          onChangeText={onChangeAmount}>
        </TextInput>
      </AppItemRow>
      <AppItemRow>
        <Text>Nro. Recibo</Text>
      </AppItemRow>
      <AppItemRow style={[styles.itemRowTogether, styles.spaceBottom]}>
        <TextInput 
          keyboardType="numeric" 
          placeholder="Ingrese el número de recibo" 
          value={amount} 
          onChangeText={onChangeAmount}>
        </TextInput>
      </AppItemRow>
      </Card>
      <Card title="Conformidad Cliente"> 
        <AppItemRow>
          <Text>Firma del Cliente</Text>
        </AppItemRow>
        {/* <ExpoPixi.Signature
          ref='signatureCanvas' //Important to be able to call this obj
          strokeWidth={3} // thickness of the brush
          strokeAlpha={0.5} // opacity of the brush
        /> */}
        <AppItemRow style={styles.buttonsSignature}>
          <AppIconButton title='Borrar' iconName='delete' onPress={onChangeAmount}/>
          <AppIconButton title='Confirmar' iconName='check-bold' onPress={onChangeAmount}/>
        </AppItemRow>
      </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  itemRowTogether:{
    marginTop:0
  },
  spaceBottom:{
    marginBottom:10
  },
  buttonsSignature:{
    justifyContent:"center"
  }
})
