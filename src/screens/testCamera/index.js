/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Linking,
  Alert,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {checkPermission, PERMISSIONS_TYPE} from '../../permission';
import {RNCamera} from 'react-native-camera';
import Svg, {Circle, Mask, Rect} from 'react-native-svg';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';
import Images from '../../assets';
const {width, height} = Dimensions.get('screen');
const CameraScreen = ({navigation}) => {
  const refCamera = React.useRef(null);
  const onOpenCamera = async () => {
    try {
      const ResultsGranted = await checkPermission(PERMISSIONS_TYPE.Camera);
      if (ResultsGranted) {
      } else {
        if (Platform.OS === 'ios') {
          Alert.alert(
            'Cấp cho AZFIND quyền truy cập camera.',
            'Truy cập cài đặt',
            [
              {
                text: 'Không',
                onPress: () => {},
                style: 'cancel',
              },
              {text: 'Đồng ý', onPress: () => Linking.openURL('app-settings:')},
            ],
            {cancelable: false},
          );
        }
      }
    } catch (err) {}
  };
  const takePicture = async () => {
    try {
      const options = {quality: 0.5, base64: true,width:200,height:200};
      const data = await refCamera.current.takePictureAsync(options);
      if (data) {
        navigation.navigate('ShowImageID', {data});
      }
    } catch (err) {
      console.log('err: ', err);
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={came => (refCamera.current = came)}
        // onGoogleVisionBarcodesDetected={({barcodes}) => {
        //   console.log('barcodes',barcodes);
        // }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: WIDTH_WINDOW,
            paddingHorizontal: WIDTH * 16,
            top: 30,
          }}>
          <Text
            style={{
              color: COLOR.WHITE_P,
              fontFamily: FONT_FAMILY.bold,
              fontSize: FONTSIZE.f_12,
            }}>
            CMND/Thẻ căn cước
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={Images.iconClose}
              style={{
                width: WIDTH * 16,
                height: WIDTH * 16,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <Mask width={width} height={height} id="mask">
            <Rect x="0" y="0" width={width} height={height} fill={'#FFFFFF'} />
            <Rect
              x={width * 0.05}
              y={(height - width * 0.8) / 2}
              width={width * 0.9}
              height={width * 0.7}
              fill={'#000000'}
            />
          </Mask>
          <Rect
            mask="url(#mask)"
            width={width}
            height={height}
            fill={'#00000050'}
          />
          <Rect
            x={width * 0.05}
            y={(height - width * 0.8) / 2}
            height="3"
            width="20"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width * 0.05}
            y={(height - width * 0.8) / 2}
            height="20"
            width="3"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width - 40}
            y={(height - width * 0.8) / 2}
            height="3"
            width="20"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width - 22}
            y={(height - width * 0.8) / 2}
            height="20"
            width="3"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width * 0.05}
            y={(height - width * 0.8) / 2 + width * 0.7 - 3}
            height="3"
            width="20"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width * 0.05}
            y={(height - width * 0.8) / 2 + width * 0.7 - 20}
            height="20"
            width="3"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width - 40}
            y={(height - width * 0.8) / 2 + width * 0.7 - 3}
            height="3"
            width="20"
            fill={'#FFFFFF'}
          />
          <Rect
            x={width - 22}
            y={(height - width * 0.8) / 2 + width * 0.7 - 20}
            height="20"
            width="3"
            fill={'#FFFFFF'}
          />
        </Svg>
        <TouchableOpacity
          onPress={takePicture}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: WIDTH * 20,
          }}>
          <Image
            source={Images.iconTakePhoto}
            style={{
              width: WIDTH * 86,
              height: WIDTH * 86,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </RNCamera>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  preview: {
    width: '100%',
    height: '100%',
  },
});
