import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrencyProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: CurrencyProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  country: {
    textAlign: 'center',
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CurrencyBtn;
