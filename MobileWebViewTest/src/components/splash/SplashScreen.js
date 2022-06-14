import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {SplashStyle} from './SplashScreen.style';
import {COLORS} from '../../constants';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WebView');
    }, 3000);
  });

  return (
    <View style={SplashStyle.backgroundView}>
      <Image source={require('../../assets/ellipse.png')} />
    </View>
  );
};

export default SplashScreen;
