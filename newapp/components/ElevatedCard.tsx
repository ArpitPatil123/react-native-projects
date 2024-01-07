import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface CardProps {
  num: number; // assuming num is of type number, adjust accordingly
  bgColor: string;
}

const ElevatedCard: React.FC<CardProps> = props => {
  return (
    <View style={[styles.card, {backgroundColor: `${props.bgColor}`}]}>
      <Text>Card {props.num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 140,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default ElevatedCard;
