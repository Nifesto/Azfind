import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import Images from '../../assets';
import styles from './style';
import {WIDTH, COLOR, FONT_FAMILY} from '../../base/core';
const DetailStocks = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.iconBack} source={Images.iconBack} />
        <View style={styles.search}>
          <Image style={styles.iconSearch} source={Images.iconSearch} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Tìm kiếm"
            placeholderTextColor={'#DFDFDF'}
          />
        </View>
      </View>
      <Text style={styles.Stocks_name}>FPT (HOSE)</Text>
      <View style={styles.top}>
        <View style={styles.top_left}>
          <Text style={styles.textValue}>115.00</Text>
          <Image
            style={{
              ...styles.iconUp,
              marginLeft: WIDTH * 2,
              marginTop: WIDTH * 22,
            }}
            source={Images.iconUp}
          />
        </View>
        <View style={styles.top_main}>
          <View style={{...styles.Change, marginBottom: WIDTH * 3}}>
            <Text style={styles.textChange}>Thay đổi</Text>
          </View>
          <View style={styles.Change}>
            <Text style={styles.textChange}>Tổng KL</Text>
          </View>
        </View>
        <View style={styles.top_right}>
          <View
            style={{
              ...styles.right,
              marginBottom: WIDTH * 3,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...styles.textTop_right,
                color: '#46A32F',
              }}>
              2.00(1.77%)
            </Text>
            <Image
              style={{
                ...styles.iconUp,
                marginLeft: WIDTH * 12,
                marginTop: WIDTH * 7,
              }}
              source={Images.iconUp}
            />
          </View>
          <View style={styles.right}>
            <Text style={{...styles.textTop_right, color: '#EB3027'}}>
              3.305.60
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body_top}>
        <View style={styles.main}>
          <View style={{...styles.title, borderTopLeftRadius: WIDTH * 10}}>
            <Text style={styles.text}>Sàn</Text>
          </View>
          <View style={styles.price}>
            <Text style={{...styles.text, color: '#2BE4EE'}}>105.10</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Giá mua hiện tại</Text>
          </View>
          <View style={{...styles.price, borderBottomLeftRadius: WIDTH * 10}}>
            <Text style={{...styles.text, color: '#46A32F'}}>115.00</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{...styles.title, marginHorizontal: WIDTH * 3}}>
            <Text style={styles.text}>Tham chiếu</Text>
          </View>
          <View style={{...styles.price, marginHorizontal: WIDTH * 3}}>
            <Text style={{...styles.text, color: '#FFB600'}}>113.00</Text>
          </View>
          <View style={{...styles.title, marginHorizontal: WIDTH * 3}}>
            <Text style={styles.text}>Giá ngừng TS</Text>
          </View>
          <View style={{...styles.price, marginHorizontal: WIDTH * 3}}>
            <Text style={{...styles.text, color: '#EB3027'}}>
              100.00 -15.00
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{...styles.title, borderTopRightRadius: WIDTH * 10}}>
            <Text style={styles.text}>Trần</Text>
          </View>
          <View style={styles.price}>
            <Text style={{...styles.text, color: '#EB27ED'}}>120.90</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Giá cân nhắc bán</Text>
          </View>
          <View style={{...styles.price, borderBottomRightRadius: WIDTH * 10}}>
            <Text style={{...styles.text, color: '#46A32F'}}>120.00 +5.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.body_bottom}>
        <View style={styles.purchase}>
          <Text style={styles.text}>Dư mưa</Text>
          <Text style={styles.text}>-</Text>
        </View>
        <View style={styles.purchase}>
          <Text style={styles.text}>Dư bán</Text>
          <Text style={styles.text}>-</Text>
        </View>
        <View style={styles.purchase}>
          <Text style={styles.text}>NN mua</Text>
          <Text style={styles.text}>100</Text>
        </View>
        <View style={styles.purchase}>
          <Text style={styles.text}>NN bán</Text>
          <Text style={styles.text}>117.00</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footer_left}>
          <View style={styles.content}>
            <Text style={styles.text}>Giá thấp nhất 52 tuần </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              67.62
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Giá cao nhất 52 tuần </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              113.00
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>EPS(4 quý) </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              4.779
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>EPS(năm) </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              5.060
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}> Đòn bẩy tài chính</Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              2.51
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Giá trị sổ sách/CP </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              19.768
            </Text>
          </View>
        </View>
        <View style={styles.footer_right}>
          <View style={styles.content}>
            <Text style={styles.text}>ROA</Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              9.22%
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>ROE </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              21.66%
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>P/E</Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              23.64
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>P/E(4 Quý) </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              22.33
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>P/B</Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              5.72
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Beta </Text>
            <Text style={{...styles.text, fontFamily: FONT_FAMILY.bold}}>
              0.85
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailStocks;
