import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
const Hander = props => {
  const {
    placeholderMoney,
    valueMoney,
    onChangeTextMoney,
    placeHoldeAgeStart,
    valueAgeStart,
    onChangeTextAgeStart,
    placeHoldeAgeEnd,
    valueAgeEnd,
    onChangeTextAgeEnd,
    valueMoneyStart,
    onChangeTextMoneyStart,
    valueInflationary,
    onChangeTextInflationary,
    valueMoneyReal,
    onChangeTextMoneyReal,
    onPress,
  } = props;
  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <TextInput
          value={valueMoney}
          onChangeText={onChangeTextMoney}
          placeholder={placeholderMoney}
          keyboardType="numeric"
          style={styles.input_1}
          placeholderTextColor="#5178AA"
          numberOfLines={1}
        />
        <Text style={styles.text_3}>đ/tháng</Text>
      </View>
      <View style={styles.age}>
        <TextInput
          keyboardType="number-pad"
          value={valueAgeStart}
          onChangeText={onChangeTextAgeStart}
          placeholder={placeHoldeAgeStart}
          style={styles.input_2}
          placeholderTextColor="#5178AA"
        />
        <TextInput
          keyboardType="number-pad"
          value={valueAgeEnd}
          onChangeText={onChangeTextAgeEnd}
          placeholder={placeHoldeAgeEnd}
          style={styles.input_2}
          placeholderTextColor="#5178AA"
          maxLength={3}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={valueMoneyStart}
          onChangeText={onChangeTextMoneyStart}
          keyboardType="number-pad"
          placeholder="Số tiền ban đầu"
          style={styles.input_1}
          placeholderTextColor="#5178AA"
        />
        <Text style={styles.text_3}>đ</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          value={valueInflationary}
          onChangeText={onChangeTextInflationary}
          keyboardType="number-pad"
          placeholder="Lạm phát/Năm"
          style={styles.input_1}
          placeholderTextColor="#5178AA"
        />
        <Text style={styles.text_3}>%/năm</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          value={valueMoneyReal}
          onChangeText={onChangeTextMoneyReal}
          keyboardType="number-pad"
          placeholder="Số tiền thực tế cần tích sản"
          style={styles.input_1}
          placeholderTextColor="#5178AA"
        />
        <Text style={styles.text_3}>đ</Text>
      </View>
      <TouchableOpacity style={styles.btSet} onPress={onPress}>
        <Text style={styles.setUp}>THIẾT LẬP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hander;
