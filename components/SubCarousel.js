/* eslint-disable react-native/no-inline-styles */
import {Button, NativeBaseProvider, Box} from 'native-base';
import React from 'react';
import {Text, View, Dimensions, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {serverUrl} from '../env';
import {useNavigation} from '@react-navigation/native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const SubCarousel = ({route}) => {
  const {subtitle} = route.params;
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.push('ContentCard', {
            content: item.content,
            audio: item.audio,
          })
        }>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}>
          <Image
            source={{uri: `${serverUrl}${item.picture.url}`}}
            style={{
              width: '100%',
              height: 400,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
              bottom: 0,
            }}>
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          backgroundColor: '#00ae8b',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          position: 'relative',
        }}>
        <Box style={{display: 'flex', zIndex: 10}}>
          <Box style={{paddingLeft: 20}}>
            <Text style={{fontSize: 18}}>請選擇服務</Text>
          </Box>
          <Box>
            <View style={{marginVertical: 10}}>
              <Carousel
                data={subtitle}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
              />
            </View>
          </Box>
        </Box>
        <Box
          style={{
            position: 'absolute',
            bottom: 50,
            zIndex: 10,
            width: '50%',
          }}>
          <Button
            onPress={() => navigation.goBack()}
            style={{backgroundColor: '#000000'}}>
            <Text style={{fontSize: 30, color: '#FFFFFF'}}>返回上一頁</Text>
          </Button>
        </Box>
        <Box
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            height: '70%',
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
export default SubCarousel;
