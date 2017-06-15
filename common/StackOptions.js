/**
 * @Author: will
 * @Date:   2017-05-26T17:25:24+08:00
 * @Filename: StackOptions.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T15:14:44+08:00
 */


 import React from 'react';
 import appColor from '../common/appColor';
 import BackIcon from '../commonview/BackIcon';

 const StackOptions = navigation => ({
   headerBackTitle: null,
   headerTitleStyle: {
     color: '#fff',
     textAlign: 'center',
     alignSelf: 'center',
     fontSize: 18,
   },
   headerStyle: {
     backgroundColor: appColor.naviBar,
   },
   headerLeft: (<BackIcon onPress={() => { navigation.goBack(null); }} />),
 });
 export default StackOptions;
