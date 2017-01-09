/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Button,
  Alert,
  ToastAndroid,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Home from './index.js';
import Welcome from './welcomeView.js';

var bool = false;//是否进入引导页的开关

export default class MyApp extends Component {
  render() {

    if(bool){
//之前进入过引导页面
      return (
        <Home/>      
      );
    }else{
//之前未进入过引导页面
      return (
//导航设置，页面切换设置
        <Navigator
          initialRoute={{ name: 'Welcome', component: Welcome }}
          configureScene={() => {
            return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;//切换页面的动画
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component) {
                //这里有个 { ...route.params }
                return <Component {...route.params} navigator={navigator} />
            }
          }}
          />
               
      );
    }
   
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MyApp);