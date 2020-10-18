import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card from '../components/Card'

export default function NoteDetail({route}) {
  const {fullNote} = route.params
  return (
    <View style={styles.container}>
      <Card title='Observación Completa'>
        <ScrollView >
          <Text style={styles.noteText}>{fullNote}</Text>
        </ScrollView>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:20
  },
  noteText:{
    paddingTop:10,
    paddingBottom:10
  }
})
