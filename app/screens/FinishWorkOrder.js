import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import AppButton from '../components/AppButton'
import AppIconButton from '../components/AppIconButton'
// import ExpoPixi from 'expo-pixi'


import AppItemRow from '../components/AppItemRow'
import Card from '../components/Card'
import Screen from '../components/Screen'
import Sign from '../components/Sign'
import appStyles from '../config/appStyles'

export default function FinishWorkOrder() {
  const [amount, setAmount] = React.useState()
  const [numberReceipt, setNumberReceipt] = React.useState()
  const onChangeAmount = (textNumber) =>{
    if(textNumber){
      setAmount(textNumber)
    }else{
      setAmount(null)
    }
  }

  const [signature, setSign] = React.useState(null);

  const handleSignature = signature => {
    //console.log(signature);
    setSign(signature);
    // const path = FileSystem.cacheDirectory + 'sign.png';
    // FileSystem.writeAsStringAsync(path, signature.replace('data:image/png;base64,', ''), {encoding: FileSystem.EncodingType.Base64}).then(res => {
    //   console.log(res);
    //   FileSystem.getInfoAsync(path, {size: true, md5: true}).then(file => {
    //     console.log(file);
    //   })
    // }).catch(err => {
    //   console.log("err", err);
    // })
  };

  const handleEmpty = () => {
    console.log('Empty');
  }

  handleClear = () => {
    console.log('clear success!');
  }

  const onFinishPressed = () => {
    console.log("Finished")
  }

  return (
    <Screen>
      <View> 
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
              value={numberReceipt} 
              onChangeText={setNumberReceipt}>
            </TextInput>
          </AppItemRow>
        </Card>

        <Card title="Conformidad Cliente"> 
          <AppItemRow>
            <Text>Firma del Cliente</Text>
          </AppItemRow>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Sign
              onOK={handleSignature} 
            />
          </View>
        </Card>
      </View>

      <AppButton customStyles={appStyles.operationalButton} title='Cerrar' onPress={onFinishPressed}/>
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
})
