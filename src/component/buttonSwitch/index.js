/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import {WIDTH} from '../../base/core';

const width = WIDTH;

const ButtonSwitch = ({switchValue}) => {
  const switchValueAnimated = useSharedValue(switchValue ? 1 : 0);

  useEffect(() => {
    switchValueAnimated.value = switchValue ? 1 : 0.1;
  }, [switchValue]);

  const styleCircle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(switchValueAnimated.value * width * 6.25),
        },
      ],
    };
  });

  const styleSwitchContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: switchValueAnimated.value === 1 ? '#1DB605' : '#F5F5F5',
    };
  });

  return (
    <Animated.View style={styles.btnPublic}>
      <Animated.View style={[styles.switchContainer, styleSwitchContainer]}>
        <Animated.View style={[styles.circle, styleCircle]} />
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  btnPublic: {
    flexDirection: 'row',
  },
  switchContainer: {
    width: width * 12,
    height: width * 6,
    borderRadius: width * 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    width: width * 5.25,
    height: width * 5.25,
    borderRadius: width * 5,
    backgroundColor: '#FFFFFF',
    shadowColor:
      Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === 'ios' ? 5 : 2.39,
    shadowRadius: Platform.OS === 'ios' ? 5 : 10.3,
    elevation: Platform.OS === 'ios' ? 0 : 6,
  },
});
export default ButtonSwitch;
