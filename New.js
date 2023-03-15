import React, {useRef, useEffect} from 'react';
import {StyleSheet, Image, View, ScrollView, Animated} from 'react-native';
import Waveform from './components/Waveform';
import waveform from './data/waveform.json';

export default function New() {
  const x = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Image source={require('./data/cover.jpeg')} style={styles.cover} />
      <View style={styles.progress}>
        <View>
          <Animated.ScrollView
            bounces={false}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: x},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            horizontal>
            <Waveform color="white" {...{waveform}} />
            <View style={StyleSheet.absoluteFill}>
              <Waveform color="#ee742f" progress={x} {...{waveform}} />
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cover: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
  progress: {
    flex: 0.5,
  },
});
