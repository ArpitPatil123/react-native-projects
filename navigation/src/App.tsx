import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    productId: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Screen',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Details Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
