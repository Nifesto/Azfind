import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Images from '../../assets';
import styles from './style';
import Form from './form';
import {WIDTH} from '../../base/core';
import i18n from 'i18n-js';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../redux/reducer/reducerLanguage';
import ModalTwoButton from '../../component/modalTwoButton';
import ModalRegister from '../../component/modalRegisterSuccess';
import ModalRequets from '../../component/modalRequest';
import ModalChangePassword from '../../component/modalChangePassword';
const Profile = ({navigation}) => {
  const [lang, setLang] = React.useState('');
  const {t} = i18n;
  const dispatch = useDispatch();
  const [check, setCheck] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [check6, setCheck6] = React.useState(false);

  const changeLanguageToVN = () => {
    setLang('vi');
    i18n.locale = 'vi';
    dispatch(changeLanguage('vi'));
  };
  const changeLanguageToEnglish = () => {
    setLang('en');
    i18n.locale = 'en';
    dispatch(changeLanguage('en'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.icon_header} source={Images.iconBack} />
        </TouchableOpacity>
        <Image style={styles.icon_header} source={Images.iconProfile} />
        <TouchableOpacity>
          <Image style={styles.iconMore} source={Images.iconMore} />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.name}>Nguyễn Văn A</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title_OTP}>OTP:</Text>
          <Text style={styles.OTP}> 123465</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Form source={Images.iconProfile} title={t('infoUser')} />
          <TouchableOpacity
            style={styles.btnShow}
            onPress={() => setCheck(!check)}>
            <Image
              source={check ? Images.iconDropUp : Images.iconDropdown}
              style={styles.iconDropUp}
            />
          </TouchableOpacity>
        </View>
        {check && (
          <View style={styles.information}>
            <View style={styles.infor}>
              <Text style={styles.content}>danh sách tài khoản</Text>
              <View style={styles.acc_extra}>
                <Text style={styles.text1}>Tích sản hưu trí - 0337577469</Text>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => setCheck6(!check6)}>
                  <Image
                    source={check6 ? Images.iconDropUp : Images.iconDropdown}
                    style={styles.iconDropUp_sm}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.infor}>
              <Text style={styles.content}>Tên khách hàng</Text>
              <Text style={styles.text}>Nguyễn văn A</Text>
            </View>
            <View style={styles.infor}>
              <Text style={styles.content}>Người giới thiệu</Text>
              <Text style={styles.text}>Nguyễn Trường Giang</Text>
            </View>
            <View style={styles.infor}>
              <Text style={styles.content}>Số lưu kí</Text>
              <Text style={styles.text}>190333564997</Text>
            </View>
            <View style={styles.infor}>
              <Text style={styles.content}>CMND</Text>
              <Text style={styles.text}>0300559974325</Text>
            </View>
            <View style={styles.infor}>
              <Text style={styles.content}>Email</Text>
              <Text style={styles.text}>hotenxx09@gmail.com</Text>
            </View>
            <View style={styles.infor}>
              <Text style={styles.content}>Số điện thoại</Text>
              <Text style={styles.text}>0335574469</Text>
            </View>
            <View style={{...styles.infor, marginBottom: 0}}>
              <Text style={styles.content}>Địa chỉ</Text>
              <Text style={styles.text}>
                381 Nguyên Khang, Yên Hòa, Cầu Giấy, Hà Nội
              </Text>
            </View>
          </View>
        )}
        <View style={styles.form}>
          <Form source={Images.iconSetting} title={t('setting')} />
          <TouchableOpacity
            onPress={() => setCheck1(!check1)}
            style={styles.btnShow}>
            <Image
              source={!check1 ? Images.iconDropdown : Images.iconDropUp}
              style={styles.iconDropUp}
            />
          </TouchableOpacity>
        </View>
        {check1 && (
          <View style={styles.show}>
            <Text style={styles.language}> Ngôn ngữ</Text>
            <TouchableOpacity onPress={changeLanguageToVN}>
              <Image style={styles.icon_language} source={Images.iconVN} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={changeLanguageToEnglish}
              style={{marginLeft: WIDTH * 12}}>
              <Image style={styles.icon_language} source={Images.iconEnglish} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.form}>
          <Form source={Images.iconKey} title={t('changePassword')} />
          <TouchableOpacity
            onPress={() => setCheck2(!check2)}
            style={styles.btnShow}>
            <Image
              source={!check2 ? Images.iconDropdown : Images.iconDropUp}
              style={styles.iconDropUp}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Form source={Images.iconLoginBy} title={t('loginWithFace')} />
          <TouchableOpacity
            onPress={() => setCheck3(!check3)}
            style={styles.btnShow}>
            <Image
              source={!check3 ? Images.iconDropdown : Images.iconDropUp}
              style={styles.iconDropUp}
            />
          </TouchableOpacity>
        </View>
        {check3 && (
          <View style={styles.show}>
            <Text style={styles.language}>Đăng nhập bằng Face/ Touch ID</Text>

            <TouchableOpacity style={styles.icon_languages}>
              <Image style={styles.icon_language} source={Images.iconSwitch} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.form}>
          <TouchableOpacity>
            <Form source={Images.iconLogOut} title={t('logOut')} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <ModalView
        isShow={visible}
        title={props.accessLanguage.notification}
        content={props.accessLanguage.dellAll}
        close={() => setVisible(false)}
        accept={deleteCart}
      /> */}
    </View>
  );
};

export default Profile;
