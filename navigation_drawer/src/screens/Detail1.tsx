import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DetailsProps} from './Details';

type Detail1Props = DrawerScreenProps<DetailsProps, 'Detail1'>;

const Detail1 = ({navigation}: Detail1Props) => {
  // const {Navigation} = route.params;
  useEffect(() => {
    console.log('Drawer Navigation is: ', navigation);
  }, [navigation]);
  return (
    <View>
      <Text>Detail1</Text>
      {/* <Button title="Go to HOME" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Detail1;

const styles = StyleSheet.create({});
