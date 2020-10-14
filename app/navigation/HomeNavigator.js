import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import NewWorkOrder from '../screens/NewWorkOrder'

const Stack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen name="NewWorkOrder" component={NewWorkOrder}  options={{ title: 'Nueva Orden Trabajo' }}/>
    </Stack.Navigator>
  );
};