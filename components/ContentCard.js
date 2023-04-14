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
import {View, ScrollView} from 'react-native';
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
  console.log(content);
  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
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
          <ScrollView
            style={{
              padding: 10,
              flexGrow: 0.9,
              flex: 1,
            }}>
            <Text
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                padding: 10,
                fontSize: 30,
                lineHeight: 40,
              }}>
              {content}
            </Text>
          </ScrollView>
        )}
        <Box style={{position: 'absolute', bottom: 40, width: '50%'}}>
          <Button
            onPress={() => navigation.goBack()}
            style={{backgroundColor: '#000000'}}>
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>返回上一頁</Text>
          </Button>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ContentCard;
