/**
* 引导页
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
  Platform,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';



//屏幕的高宽
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var button_w = w/2 - 100;

//导航到首页
var HomeView = require('./index.js');



var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})




export default class Welcome extends Component {
	_pressButton(){
		//方式一：推入栈
    const { navigator } = this.props;//接受导航的参数
    if(navigator) {
      navigator.push({
            name: 'Home',
            component: HomeView,
      });
        
	}
}

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello 华晨宇</Text>
        </View>
        <View style={styles.slide2}>
          <Image
            style={{width:w,height:h}}
            resizeMode='stretch'
            source={{uri:'http://imgsrc.baidu.com/forum/w%3D580/sign=9f3d60197b3e6709be0045f70bc69fb8/896b01292df5e0fea19e153f586034a85fdf72fa.jpg'}}
            />
        </View>
        <View style={styles.slide3}>
          <View style={{zIndex:50}}>
            <Image
              style={{width:w,height:h}}
              resizeMode='stretch'
              source={{uri:'http://www.qulishi.com/uploads/star/201603/56d67f121c141.png'}}
              >            
              </Image> 
          </View>
          <View style={{zIndex:100,position:'absolute',width:200,left:button_w,bottom:100,justifyContent:'center',flexDirection:'column',alignSelf:'center'}}>
            <Button 
              flex={1}
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              alignSelf='center' 
              onPress={this._pressButton.bind(this)}           
              title="启动应用"
              color="#841584"
              borderBottomColor='#CDCDCD'
              accessibilityLabel="Learn more about this purple button"/>         
            </View>        
        </View>
      </Swiper>
    )
  }
}

