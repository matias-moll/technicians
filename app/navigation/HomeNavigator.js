import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import NewWorkOrder from '../screens/NewWorkOrder'
import colors from '../config/colors';
import Routes from './Routes';
import Login from '../screens/Login';
import ClientServices from '../screens/ClientServices';
import FinishWorkOrder from '../screens/FinishWorkOrder';
import NoteDetail from '../screens/NoteDetail';

const Stack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <Stack.Navigator  
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary, height:80},
        headerTintColor: colors.white,
        headerTitleAlign: "center" 
      }} 
    >
      <Stack.Screen name={Routes.LOGIN} component={Login} options={{ headerShown:false }}/>
      <Stack.Screen name={Routes.HOME} component={Home} options={{ title: 'Orden de Trabajo', headerTitleStyle: { alignSelf: 'center' }, }} />
      <Stack.Screen name={Routes.CLIENT_SERVICES} component={ClientServices} options={{ title: 'Servicios Cliente' }} />
      <Stack.Screen name={Routes.NEW_WORK_ORDER} component={NewWorkOrder}  options={{ title: 'Nueva Orden' }}/>
      <Stack.Screen name={Routes.FINISH_WORK_ORDER} component={FinishWorkOrder}  options={{ title: 'Finalizar Orden' }}/>
      <Stack.Screen name={Routes.NOTE_DETAIL} component={NoteDetail}  options={{ title: 'Detalle Observación' }}/>
    </Stack.Navigator>
  );
};