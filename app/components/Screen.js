import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import {useNetInfo} from '@react-native-community/netinfo'

import colors from '../config/colors'
import appStyles from '../config/appStyles'
import AppButton from './AppButton'

export default function Screen({children, style, bottomAction = null}) {
  const netInfo = useNetInfo();
  const noConnection = netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;
  const colorAction = noConnection ? colors.medium : colors.primary;
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
        <View> 
          {children}
        </View>
        { bottomAction && 
        <AppButton disabled={noConnection} color={colorAction} customStyles={appStyles.actionButton} title={bottomAction.title} onPress={bottomAction.onPress} />}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
  container:{
    flex:1,
    marginBottom:20,
    backgroundColor: colors.background,
  },
  bottomContainer: {
    justifyContent:'flex-end'
  },
})
