import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {COLOR} from '../base/core';
import styles from './styles';
const TabBarCustom = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const icon = options.tabBarIcon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={onPress}
            style={{}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icon}
                style={{
                  ...styles.icon,
                  tintColor: isFocused ? COLOR.MAIN_S : COLOR.WHITE_P,
                }}
              />
              <Text
                style={{
                  ...styles.txt,
                  color: isFocused ? COLOR.MAIN_S : COLOR.WHITE_P,
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default TabBarCustom;
