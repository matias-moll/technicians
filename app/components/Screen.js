import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import Constants from 'expo-constants'
import colors from '../config/colors'

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView style={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container:{
    flex:1,
    marginBottom:20,
    backgroundColor: colors.background,
  },
})
