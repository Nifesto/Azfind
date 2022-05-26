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
import i18n from '../../translate/i18n';
const OpenAccount = ({navigation}) => {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [count_1, setCount_1] = React.useState(0);
  const onPress_1 = () => setCount(prevCount_1 => prevCount_1 + 1);
  const [render, setRendrer] = useState([
    {
      id: 1,
      name: i18n.t('male'),
      choose: false,
    },
    {
      id: 2,
      name: i18n.t('female'),
      choose: false,
    },
    {
      id: 3,
      name: i18n.t('other'),
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
      <Header
        title={i18n.t('openAccount')}
        btnLeft={() => navigation.goBack()}
      />
      <ScrollView>
        <InfoAcc title={i18n.t('phoneNumber')} />
        <InfoAcc title={'Email'} />
        <InfoAcc title={i18n.t('identificationCard')} />
        <View style={styles.info}>
          <Text style={styles.title}>
            {i18n.t('fullName')} <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title_2}>Nguyễn Văn A</Text>
        </View>
        <View style={styles.info_1}>
          <Text style={styles.title}>
            {i18n.t('dateOfBirth')} <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title_2}>06/08/1968</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title_1}>
            {i18n.t('permanentAddress')} <Text style={{color: 'red'}}>*</Text>
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
            {i18n.t('contactAddress')}
            <Text style={{color: 'red'}}>*</Text>
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
            {i18n.t('gender')} <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={styles.render}>
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
            {i18n.t('dateOfIssue')}
            <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title_2}>06/08/2021</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>
            {i18n.t('placeOfIssue')}
            <Text style={{color: 'red'}}>*</Text>
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
            {i18n.t('faceAuthentication')} <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={styles.sucess}>
            <Text style={{...styles.title, color: '#fff'}}>
              {i18n.t('success')}
            </Text>
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
        <Line />
        <Text style={styles.title_3}> {i18n.t('registerService')}</Text>

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
          <Text style={styles.title}>
            {' '}
            {i18n.t('SignUpForMarginTradingService')}
          </Text>
        </View>
        <Line />
        <Text style={styles.title_3}>
          {' '}
          {i18n.t('informationOfBankIsAccount')}
        </Text>
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
            {i18n.t('fullName')} <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Text style={styles.title}>Nguyễn Văn A</Text>
        </View>
        <Text
          style={{
            ...styles.title,
            marginHorizontal: (windowWidth * 16) / 428,
          }}>
          {i18n.t('bank')} <Text style={{color: 'red'}}>*</Text>
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
          <Text style={{...styles.title, fontSize: 18}}>
            {' '}
            {i18n.t('branch')}
          </Text>

          <TouchableOpacity>
            <Image
              source={Images.iconDropRight}
              resizeMode="contain"
              style={styles.y}
            />
          </TouchableOpacity>
        </View>
        <InfoAcc title={i18n.t('bankAccountNumber')} />
        <Line />
        <Text style={styles.title_3}>{i18n.t('broker')}</Text>
        <InfoAcc title={i18n.t('brokerCode')} />
        <InfoAcc title={i18n.t('brokerName')} />
        <Line />
        <Text style={styles.title_3}>{i18n.t('collaborators')}</Text>
        <InfoAcc title={i18n.t('collaboratorCode')} />
        <InfoAcc title={i18n.t('collaboratorIsName')} />
        <Line />
        <Text style={styles.title_3}>
          {i18n.t('referralInformationoptional')}
        </Text>
        <InfoAcc title={i18n.t('referralCode')} />
        <InfoAcc title={i18n.t('referrerIsName')} />
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
            {i18n.t('rules')}
            <Text style={{color: 'red'}}> {i18n.t('detail')}</Text>
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>{i18n.t('registration')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OpenAccount;
