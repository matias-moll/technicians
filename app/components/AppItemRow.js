import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppItemRow({children, style}) {
  return (
    <View style={[styles.dataItemRow, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  dataItemRow: {
    flexDirection:'row',
    marginTop:10,
    alignItems: 'center'
  },
})
