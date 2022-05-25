/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../component/header';
import {COLOR, HEIGHT, WIDTH, WIDTH_WINDOW} from '../../base/core';

const VideoTab = () => {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH_WINDOW,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>video</Text>
    </View>
  );
};
const QuestionTab = () => {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH_WINDOW,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>QuestionTab</Text>
    </View>
  );
};
const ContactTab = () => {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH_WINDOW,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>ContactTab</Text>
    </View>
  );
};
const PostTab = () => {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH_WINDOW,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>PostTab</Text>
    </View>
  );
};
const PostTabTwo = () => {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH_WINDOW,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>PostTabTwo</Text>
    </View>
  );
};
const TestBar = () => {
  const refScroll = React.useRef(null);
  const [choose, setChoose] = React.useState(0);
  const [dataWidth, setDataWidth] = React.useState([]);
  const [title, setTitle] = React.useState([
    {
      name: 'Video',
      choose: true,
    },
    {
      name: 'Bài viết',
      choose: false,
    },
    {
      name: 'Câu hỏi thường gặp',
      choose: false,
    },
    {
      name: 'Chăm sóc khách hàng MRT',
      choose: false,
    },
    {
      name: 'Chăm sóc ',
      choose: false,
    },
  ]);
  const [arrWidthButton, setArrWidthButton] = React.useState([]);
  const refLabel = React.useRef(null);
  const onPress = (item, index) => {
    setChoose(index);
    if (dataWidth.length > index) {
      refLabel?.current?.scrollTo({
        x: dataWidth[index - 1],
        y: 0,
        animate: true,
      });
    }
    refScroll?.current?.scrollTo({
      x: WIDTH_WINDOW * index,
      y: 0,
      animate: true,
    });
  };
  
  return (
    <View style={{flex: 1, backgroundColor: COLOR.WHITE_P}}>
      <Header title={'Đào tạo'} showIcon />
      <View
        style={{
          width: WIDTH * 100,
          height: HEIGHT * 1.1,
          backgroundColor: '#E5E5E5',
        }}
      />
      {/* <Tabbar refScroll={refScroll} /> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: WIDTH * 4,
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={refLabel}>
          {title.map((item, index) => {
            return (
              <TouchableOpacity
                onLayout={e => {
                  var layout = e.nativeEvent.layout;
                  dataWidth[index] = layout.x;
                  setDataWidth(dataWidth);
                }}
                key={index}
                onPress={() => onPress(item, index)}
                style={{
                  marginRight: WIDTH * 26,
                  borderBottomColor: COLOR.MAIN_P,
                  paddingVertical: HEIGHT * 1.5,
                  borderBottomWidth: index === choose ? 1 : 0,
                }}>
                <Text
                  style={{
                    color: index === choose ? COLOR.MAIN_P : COLOR.MAIN_P,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={{flex: 1}}>
        <ScrollView
          ref={refScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          scrollEnabled={false}>
          <VideoTab />
          <PostTab />
          <QuestionTab />
          <ContactTab />
          <PostTabTwo />
        </ScrollView>
      </View>
    </View>
  );
};

export default TestBar;
