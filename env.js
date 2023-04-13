import {Platform} from 'react-native';

let serverUrl;

if (process.env.NODE_ENV === 'production') {
  serverUrl = 'https://lingkwongbe.herokuapp.com';
} else {
  if (Platform.OS === 'android') {
    serverUrl = 'https://lingkwongbe.herokuapp.com';
  } else if (Platform.OS === 'ios') {
    serverUrl = 'https://lingkwongbe.herokuapp.com';
  }
}

export {serverUrl};
