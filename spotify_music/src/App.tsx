import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {setupPlayer, addTracks} from '../musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';

const App = (): JSX.Element => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setup = async () => {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTracks();
    }

    setIsPlayerReady(isSetup);
  };

  useEffect(() => {
    // console.log('Setup is ready');
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});
