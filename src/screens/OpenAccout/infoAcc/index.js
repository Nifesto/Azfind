import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
const InfoAcc = props => {
  return (
    <View style={styles.info}>
      <Text style={styles.title}>
        {props.title} <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput style={styles.input_1} />
    </View>
  );
};

export default InfoAcc;
