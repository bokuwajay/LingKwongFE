/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions, Image, Pressable} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {NativeBaseProvider, Box, Button} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import 'moment/locale/zh-hk';
import {serverUrl} from '../env';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default function HomeScreen({navigation}) {
  const [time, setTime] = React.useState();
  const [data, setData] = React.useState('');

  async function fetchData() {
    const res = await fetch(`${serverUrl}/content-pages`);
    const data = await res.json();
    setData(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment(new Date()).format('LLLL'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.push('SubCarousel', {subtitle: item.subtitle})
        }>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}>
          <Image
            source={{uri: `${serverUrl}${item.cover.url}`}}
            style={{
              width: '100%',
              height: 400,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
              bottom: 0,
            }}>
            {item.title}
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
            <Text style={{marginBottom: 10}}>{time}</Text>
            <Text style={{fontSize: 18}}>請選擇服務</Text>
          </Box>
          <Box>
            <View style={{marginVertical: 10}}>
              <Carousel
                data={data || []}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
              />
            </View>
          </Box>
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
}
