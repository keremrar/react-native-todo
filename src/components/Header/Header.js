import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header_styles';

const Header = ({tasks}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar: {tasks.length}</Text>
    </View>
  );
};

export default Header;
