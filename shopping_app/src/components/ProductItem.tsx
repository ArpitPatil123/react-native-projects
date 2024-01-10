import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

const ProductItem = ({product}: ProductProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
        <View style={styles.details}>
          <Text style={{color: '#4285f4'}}>{product.name}</Text>
          <Text style={{color: '#000'}}>
            Original Price:{' '}
            <Text
              style={{textDecorationLine: 'line-through', color: '#f87756'}}>
              {product.originalPrice}
            </Text>{' '}
            <Text style={{color: '#73c982'}}>₹{product.discountPrice}</Text>
          </Text>
          <Text style={{color: '#000000'}}>Rating: {product.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    width: '100%',
    // backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
  },
  details: {
    paddingVertical: 10,
    gap: 12,
  },
});
