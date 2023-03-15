import React from 'react';
import {
  VStack,
  Box,
  Divider,
  NativeBaseProvider,
  Button,
  Text,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import Sound from 'react-native-sound';
import {serverUrl} from '../env';
// import songfile from '../android/app/src/main/res/raw/song.mp3';
import SoundPlayer from 'react-native-sound-player';
import {AudioPlayer} from 'react-native-simple-audio-player';

const ContentCard = ({route}) => {
  const {content, audio} = route.params;
  const navigation = useNavigation();

  // const sing = React.useCallback(async () => {
  //   console.log('in sing!!!');
  //   try {
  //     await SoundPlayer.playUrl(`${serverUrl}${audio[0]?.url}`);
  //   } catch (error) {
  //     console.log('Error playing sound: ', error);
  //   }
  // }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {audio.length > 0 ? (
          <View
            style={{
              flex: 1,
              backgroundColor: '#313131',
              justifyContent: 'center',
            }}>
            <AudioPlayer url={`${serverUrl}${audio[0]?.url}`} />
          </View>
        ) : (
          <Box border="1" borderRadius="md">
            <Box px="4">
              <Text style={{fontSize: 18}}>{content}</Text>
            </Box>
          </Box>
        )}
        {/* <Box>
          <Button onPress={() => sing()}>Play</Button>
        </Box>
        <Box>
          <Button onPress={() => SoundPlayer.stop()}>Stop</Button>
        </Box> */}
        <Box style={{position: 'absolute', bottom: 40}}>
          <Button onPress={() => navigation.goBack()}>返回上一頁</Button>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ContentCard;
