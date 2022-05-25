import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {WIDTH} from '../../base/core';

const ShowImageID = ({navigation, route}) => {
  const data = route.params?.data;
  console.log(data.base64);
  var img = 'data:image/png;base64,';
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>index</Text>
      <Image
        source={{uri: `data:image/png;base64,${data?.base64}`}}
        style={{width: WIDTH * 80, height: WIDTH * 90, resizeMode: 'cover'}}
      />
    </View>
  );
};

export default ShowImageID;

const styles = StyleSheet.create({});
