/**
 * @Author: will
 * @Date:   2017-05-31T11:48:18+08:00
 * @Filename: SecondTab.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T15:18:54+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import TabOptions from '../../common/TabOptions';


export default class SecondTab extends PureComponent {
   static navigationOptions = ({ navigation }) => {
     const normalImage = require('../../../resource/image/demo/contacts_diable.png');
     const selectedImage = require('../../../resource/image/demo/contacts.png');
     return {
       ...TabOptions(navigation, normalImage, selectedImage, '通讯录'),
       headerTitle: '通讯录',
     };
   }

   render() {
     return (
       <View style={styles.container}>
         <Text>第二个Tab页面</Text>
       </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
