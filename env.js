import {Platform} from 'react-native';

let serverUrl;

if (process.env.NODE_ENV === 'production') {
  serverUrl = 'https://xxx.com';
} else {
  if (Platform.OS === 'android') {
    serverUrl = 'http://10.0.2.2:1337';
  } else if (Platform.OS === 'ios') {
    serverUrl = 'http://localhost:1337';
  }
}

export {serverUrl};
