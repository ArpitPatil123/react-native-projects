import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playBackService} from '../../musicPlayerService';

type playbackType = {
  state: string | undefined;
};

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  // next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  // toggle play
  const togglePlayback = async (playback: playbackType) => {
    // console.log('playback is: ', playback);
    const currentTrack = await TrackPlayer.getActiveTrack();
    // console.log('Current track is: ', currentTrack);

    if (currentTrack !== null) {
      // await TrackPlayer.play();
      if (playback?.state === State.Paused || playback?.state === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  // useEffect(() => {
  //   console.log('Playback state is: ', playBackState);
  // }, [playBackState]);

  // useEffect(() => {
  //   console.log('State is: ', State);
  // }, [State]);

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <TouchableOpacity onPress={() => togglePlayback(playBackState)}>
        <Icon
          style={styles.icon}
          name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
        />
        {/* <Text style={{fontSize: 24}}>Press me</Text> */}
      </TouchableOpacity>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
