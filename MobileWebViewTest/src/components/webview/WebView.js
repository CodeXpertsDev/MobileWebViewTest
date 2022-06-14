import React from 'react';
import {View, Alert} from 'react-native';
import WebView from 'react-native-webview';
import {WebViewStyle} from './WebView.style';

const WebViewScreen = ({navigation}) => {
  const createSmsAlert = () =>
    Alert.alert(
      'SMS Subscription',
      'Do you want to subscribe to SMS Notifications?',
      [
        {
          text: 'No',
          onPress: () => console.log('user canceled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => console.log('user subscription procedure start'),
        },
      ],
    );
  return (
    <View style={WebViewStyle.backgroundView}>
      <WebView
        containerStyle={{flex: 1, width: '100%', backgroundColor: '#000'}}
        source={{uri: 'https://www.bingoaliens.com'}}
        onLoadEnd={() => {
          console.log('page loaded successfully');
          createSmsAlert();
        }}
      />
    </View>
  );
};

export default WebViewScreen;
