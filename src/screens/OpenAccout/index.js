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
const windowWidth = Dimensions.get('window').width;
import styles from './styles';
import InfoAcc from './infoAcc/index';
import Images from './../../assets/index';
import Header from '../../component/header';
const OpenAccount = ({navigation}) => {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [count_1, setCount_1] = React.useState(0);
  const onPress_1 = () => setCount(prevCount_1 => prevCount_1 + 1);
  const [render, setRendrer] = useState([
    {
      id: 1,
      name: 'Nam',
      choose: false,
    },
    {
      id: 2,
      name: 'Nữ',
      choose: false,
    },
    {
      id: 3,
      name: 'Khác',
      choose: false,
    },
  ]);
  const chooseOne = item => {
    let copied = [...render];
    copied.map(element => {
      if (item.id === element.id) {
        element.choose = true;
      } else {
        element.choose = false;
      }
    });
    setRendrer(copied);
  };

  const Line = () => {
    return <View style={styles.line} />;
  };
  return (
    <View style={styles.container}>
      <Header title="MỞ TÀI KHOẢN" btnLeft={() => navigation.goBack()} />
      <ScrollView>
        <InfoAcc title={'Số điện thoại'} />
        <InfoAcc title={'Email'} />
        <InfoAcc title={'Số CMND/ CCCD'} />
        <View style={styles.info}>
          <Text style={styles.title}>
            Họ và tên <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title_2}>Nguyễn Văn A</Text>
        </View>
        <View style={styles.info_1}>
          <Text style={styles.title}>
            Ngày sinh <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title_2}>06/08/1968</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title_1}>
            Địa chỉ thường trú <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            multiline={true}
            style={{
              ...styles.input_1,
              height: (46.44 * windowWidth) / 428,
              borderRadius: 8,
            }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Địa chỉ liên lạc <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            multiline={true}
            style={{
              ...styles.input_1,
              height: (46.44 * windowWidth) / 428,
              borderRadius: 8,
            }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Giới tính <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={styles.render}>
            {/* <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.box} />
              <Text style={styles.title}>Nam</Text>
            </View> */}
            {render.map((item, index) => {
              return (
                <View style={{flexDirection: 'row'}} key={item.id}>
                  <TouchableOpacity
                    style={
                      item.choose
                        ? {backgroundColor: '#45B9A4', ...styles.box}
                        : styles.box
                    }
                    onPress={() => {
                      chooseOne(item);
                    }}>
                    <Image
                      source={Images.iconChoice}
                      resizeMode="contain"
                      style={styles.a}
                    />
                  </TouchableOpacity>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Ngày cấp <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title_2}>06/08/2021</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Nơi cấp <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            multiline={true}
            style={{
              ...styles.input_1,
              height: (73 * windowWidth) / 428,
              borderRadius: 8,
            }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            Xác thực khuôn mặt <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={styles.sucess}>
            <Text style={{...styles.title, color: '#fff'}}>Thành công </Text>
            <Text style={{...styles.title, color: '#fff'}}>(90%)</Text>
          </View>
        </View>
        <View style={{...styles.info, justifyContent: 'space-evenly'}}>
          <Image
            source={Images.iconCMND}
            resizeMode="contain"
            style={styles.cmnd}
          />
          <Image
            source={Images.iconCMND}
            resizeMode="contain"
            style={styles.cmnd}
          />
          <Image
            source={Images.iconHuman}
            resizeMode="contain"
            style={{
              ...styles.cmnd,
              borderRadius: (windowWidth * 64.66) / 428 / 2,
              width: (windowWidth * 64.66) / 428,
            }}
          />
        </View>
        <Text style={styles.title_3}>ĐĂNG KÍ DỊCH VỤ</Text>

        <View style={styles.registration}>
          <TouchableOpacity
            onPress={onPress_1}
            style={{
              ...styles.box,
              backgroundColor: count % 2 === 1 ? '#45B9A4' : null,
            }}>
            <Image
              source={Images.iconChoice}
              resizeMode="contain"
              style={styles.a}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Đăng ký dịch vụ giao dịch ký quỹ</Text>
        </View>
        <Line />
        <Text style={styles.title_3}>THÔNG TIN TÀI KHOẢN NGÂN HÀNG</Text>
        <View
          style={{
            ...styles.info,
            justifyContent: 'flex-start',
            marginBottom: (windowWidth * 10) / 428,
          }}>
          <Text
            style={{
              ...styles.title,
              marginRight: 20,
            }}>
            Họ và tên <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title}>Nguyễn Văn A</Text>
        </View>
        <Text
          style={{
            ...styles.title,
            marginHorizontal: (windowWidth * 16) / 428,
          }}>
          Ngân hàng <Text style={{color: 'red'}}>*</Text>
        </Text>
        <View style={styles.bank}>
          <Text style={{...styles.title, fontSize: 18}}>
            Techcombank - Ngân hàng Kỹ Thương Việt Nam
          </Text>
          <TouchableOpacity style={styles.delete}>
            <Image
              source={Images.iconClose_1}
              resizeMode="contain"
              style={styles.x}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bank}>
          <Text style={{...styles.title, fontSize: 18}}>Chi nhánh</Text>

          <TouchableOpacity>
            <Image
              source={Images.iconDropRight}
              resizeMode="contain"
              style={styles.y}
            />
          </TouchableOpacity>
        </View>
        <InfoAcc title={'Số TK ngân hàng'} />
        <Line />
        <Text style={styles.title_3}>NHÂN VIÊN MÔI GIỚI</Text>
        <InfoAcc title={'Mã nhân viên môi giới'} />
        <InfoAcc title={'Tên nhân viên môi giới'} />
        <Line />
        <Text style={styles.title_3}>CỘNG TÁC VIÊN</Text>
        <InfoAcc title={'Mã cộng tác viên'} />
        <InfoAcc title={'Tên cộng tác viên'} />
        <Line />
        <Text style={styles.title_3}>
          THÔNG TIN NGƯỜI GIỚI THIỆU (TÙY CHỌN)
        </Text>
        <InfoAcc title={'Mã người giới thiệu'} />
        <InfoAcc title={'Tên người giới thiệu'} />
        <View style={styles.commit}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              ...styles.box,
              backgroundColor: count % 2 === 1 ? '#45B9A4' : null,
            }}>
            <Image
              source={Images.iconChoice}
              resizeMode="contain"
              style={styles.a}
            />
          </TouchableOpacity>
          <Text style={{...styles.title, flex: 1}}>
            Tôi xin cam kết chịu trách nhiệm về mọi thông tin đã khai báo và xác
            nhận việc đăng ký mở tài khoản giao dịch chứng khoán.
            <Text style={{color: 'red'}}>Chi tiết hợp đồng</Text>
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OpenAccount;
