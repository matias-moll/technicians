import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import NewWorkOrder from '../screens/NewWorkOrder'
import colors from '../config/colors';
import Routes from './Routes';
import Login from '../screens/Login';
import ClientDetails from '../screens/ClientDetails';
import FinishWorkOrder from '../screens/FinishWorkOrder';

const Stack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <Stack.Navigator  
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        headerTintColor: colors.black,
      }} 
    >
      <Stack.Screen name={Routes.LOGIN} component={Login} options={{ headerShown:false }}/>
      <Stack.Screen name={Routes.HOME} component={Home} options={{ title: 'Orden de Trabajo' }} />
      <Stack.Screen name={Routes.CLIENT_DETAILS} component={ClientDetails} options={{ title: 'Detalle del Cliente' }} />
      <Stack.Screen name={Routes.NEW_WORK_ORDER} component={NewWorkOrder}  options={{ title: 'Nueva Orden de Trabajo' }}/>
      <Stack.Screen name={Routes.FINISH_WORK_ORDER} component={FinishWorkOrder}  options={{ title: 'Terminar Orden de Trabajo' }}/>
    </Stack.Navigator>
  );
};