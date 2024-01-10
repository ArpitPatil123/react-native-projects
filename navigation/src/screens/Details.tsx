import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({navigation, route}: DetailsProps) => {
  const {productId} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000'}}>Details</Text>
      <Text style={{color: '#000'}}>Product Id: {productId}</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
