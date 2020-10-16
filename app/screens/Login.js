import React from 'react'
import { ImageBackground, StyleSheet, View} from 'react-native'

import Screen from '../components/Screen'
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppText from '../components/AppText'
import colors from '../config/colors'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import Routes from '../navigation/Routes'


export default function Login({navigation}) {

  return (
    <ImageBackground 
    style={styles.background}
    source={require('../assets/background2.jpg')}>
      <Screen style={styles.container}>
        <AppText style={styles.title}> Técnicamente </AppText>
        <AppForm
          initialValues={{email:'', password:''}}
          onSubmit={values => navigation.navigate(Routes.HOME)}
        >
          <AppFormField 
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            name='user'
            placeholder='Usuario'
          />
          <AppFormField 
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Contraseña'
            secureTextEntry
            textContentType='password'
          />
          <SubmitButton title='Login'/>
        </AppForm>
      </Screen>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding:30
  },

  title: {
    fontSize:40,
    color: colors.white,
    fontWeight:'900',
    marginBottom:80,
    textAlign:'center',
    textShadowOffset: {width:2,height:2},
    textShadowColor: colors.black,
    textShadowRadius: 2
  }
})
