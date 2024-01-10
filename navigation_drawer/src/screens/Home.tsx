import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000'}}>Home Page</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />

      {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
