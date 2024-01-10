import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import {Props} from '../App';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import Detail1 from './Detail1';
import Detail2 from './Detail2';
import CustomDrawer from '../CustomDrawer';

export type DetailsProps = {
  Detail1: undefined;
  Detail2: undefined;
};

type NavProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const Drawer = createDrawerNavigator<DetailsProps>();

const Details = ({navigation}: NavProps) => {
  const {setOptions} = navigation;
  useEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, [navigation, setOptions]);

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: '#000',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}>
      <Drawer.Screen name="Detail1" component={Detail1} />
      <Drawer.Screen name="Detail2" component={Detail2} />
    </Drawer.Navigator>
  );
};

export default Details;

const styles = StyleSheet.create({});
