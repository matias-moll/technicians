import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Card from '../components/Card'
import Screen from '../components/Screen';
import colors from '../config/colors';

export default function NoteDetail({route}) {
  const {fullNote} = route.params
  return (
    <Screen>
      <Card title='Observación Completa'>
          <Text style={styles.noteText}>{fullNote}</Text>
      </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  noteText:{
    paddingTop:10,
    paddingBottom:10
  }
})
