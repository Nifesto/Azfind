import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
const Form = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image source={props.source} style={styles.img} />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Form;
