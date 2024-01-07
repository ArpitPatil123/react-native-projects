import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/537064629/photo/tea-plantations-around-the-emerald-lake-in-ooty.jpg?s=1024x1024&w=is&k=20&c=1hQlK812rcCKBSs_7GsokpadBsmlppyQYNPCKGdDjBc=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.information}>
          <Text style={{fontSize: 24, color: 'blue'}}>Ooty</Text>
          <Text style={{fontSize: 16, color: 'gray'}}>
            Location: Near Mysuru
          </Text>
          <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.3)'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nam
            unde quis deserunt est dolorem cupiditate ipsam consequuntur natus.
            Assumenda numquam dolor similique.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingHorizontal: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 12,
    width: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  color: {
    color: '#000000',
  },
  information: {
    padding: 12,
    flex: 1,
    gap: 13,
  },
});
