import {Platform} from 'react-native'
import colors from './colors'

export default{
  dataItem: {
    fontSize:16,
    flex: 1, 
    flexWrap: 'wrap',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginLeft: 5
  },
  operationalButton:{
    width:300,
    alignSelf:'center',
    borderRadius: 0,
    marginTop:30
  }
}
