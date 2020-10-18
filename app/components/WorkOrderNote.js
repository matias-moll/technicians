import { Link, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import colors from '../config/colors'
import Routes from '../navigation/Routes'
import AppIconButton from './AppIconButton'
import Card from './Card'

export default function WorkOrderNote({note}) {
  const navigation = useNavigation()

  const onFullNotePressed = () => {
    navigation.navigate(Routes.NOTE_DETAIL, {fullNote: note.full})
  }
  return (
    <Card title='Observación'>
      <View style={styles.dataItemRow}>
        <Text style={styles.dataSmall}>{note.summary} ... <Text onPress={onFullNotePressed} style={styles.linkFull}> ver mas </Text> </Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  dataItemRow: {
    flexDirection:'row',
    marginBottom:5,
    marginTop:5,
    alignItems: 'center'
  },
  data: {
    fontSize:18,
    flex: 1, 
    flexWrap: 'wrap'
  },
  dataSmall: {
    fontSize:14,
    flex: 1, 
    flexWrap: 'wrap'
  },
  linkFull: {
    textDecorationLine: "underline",
    color: "dodgerblue"
  }
})
