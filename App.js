import 'react-native-gesture-handler';
import React from 'react';
import HomeNavigator from './app/navigation/HomeNavigator'
import { NavigationContainer } from '@react-navigation/native';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <HomeNavigator></HomeNavigator>
      </NavigationContainer>
      <OfflineNotice />
    </>
  );
};
