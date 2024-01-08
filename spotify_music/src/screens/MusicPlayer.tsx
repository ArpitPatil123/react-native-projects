import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {playListData} from '../constants';
import SongInfo from '../components/SongInfo';
import TrackSlider from '../components/TrackSlider';
import ControlCenter from '../components/ControlCenter';

const {width} = Dimensions.get('window');

const events = [Event?.PlaybackState, Event?.PlaybackError];

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  // useEffect(() => {
  //   console.log('Track is: ', track);
  // }, [track]);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    // console.log('event is: ', event);
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        const playingTrack = await TrackPlayer.getActiveTrack();
        setTrack(playingTrack);
        break;
    }
  });

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{
                uri: track?.artwork?.toString(),
              }}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={item => item.id.toString()}
      />
      <SongInfo track={track} />
      <TrackSlider />
      <ControlCenter />
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});
