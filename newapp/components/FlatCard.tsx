import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';

export default function FlatCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.flexContainer}>
        <Card num={1} bgColor={'red'} />
        <Card num={2} bgColor={'green'} />
        <Card num={3} bgColor={'blue'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    paddingHorizontal: 16,
    flex: 1,
    gap: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
});
