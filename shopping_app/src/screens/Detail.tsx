import {Image, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootScreenProps} from '../App';
import React from 'react';

type DetailProps = NativeStackScreenProps<RootScreenProps, 'Details'>;

const Detail = ({navigation, route}: DetailProps) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.information}>
        <Text style={{color: '#4285f4', fontSize: 20}}>{product.name}</Text>
        <Text style={{color: '#000000'}}>
          Original Price:{' '}
          <Text style={{textDecorationLine: 'line-through', color: '#f87756'}}>
            {product.originalPrice}
          </Text>{' '}
          <Text style={{color: '#73c982'}}>₹{product.discountPrice}</Text>
        </Text>
        <Text style={{color: '#000000'}}>Rating: {product.rating}</Text>
        {product.tags.map((tag, index) => (
          <View key={index} style={styles.badge}>
            <Text style={styles.tagBadge}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
  },
  information: {
    flex: 1,
    gap: 12,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tagBadge: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    color: 'rgba(0, 0, 0, 0.8)',
  },
});
