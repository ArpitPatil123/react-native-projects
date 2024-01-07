import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElevatedCard from './ElevatedCard';

const ElevatedCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <ElevatedCard num={1} bgColor="red" />
        <ElevatedCard num={2} bgColor="green" />
        <ElevatedCard num={3} bgColor="blue" />
        <ElevatedCard num={1} bgColor="red" />
        <ElevatedCard num={2} bgColor="green" />
        <ElevatedCard num={3} bgColor="blue" />
        <ElevatedCard num={1} bgColor="red" />
        <ElevatedCard num={2} bgColor="green" />
        <ElevatedCard num={3} bgColor="blue" />
        <ElevatedCard num={1} bgColor="red" />
        <ElevatedCard num={2} bgColor="green" />
        <ElevatedCard num={3} bgColor="blue" />
        <ElevatedCard num={1} bgColor="red" />
        <ElevatedCard num={2} bgColor="green" />
        <ElevatedCard num={3} bgColor="blue" />
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    padding: 8,
    paddingHorizontal: 16,
    flex: 1,
    gap: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
