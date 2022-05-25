import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ForChild from './forChild';
import styles from './styles';
import Hander from './formInput';
import Header from './../../component/header/index';

const Form = ({navigation}) => {
  const [visibleOne, setVisibleOne] = React.useState(false);
  const [visibleTwo, setVisibleTwo] = React.useState(false);
  const [visibleThree, setVisibleThree] = React.useState(false);
  //child
  const [moneyChild, setMoneyChild] = useState('');
  const [ageStartChild, setAgeStartChild] = useState('');
  const [ageEndChild, setAgeEndChild] = useState('');
  const [moneyStartChild, setMoneyStartChild] = useState('');
  const [moneyDecreaseChild, setMoneyDecreaseChild] = useState('');
  const [moneyRealChild, setMoneyRealChild] = useState('');
  /// Retire
  const [moneyRetire, setMoneyRetire] = useState('');
  const [ageStartRetire, setAgeStartRetire] = useState('');
  const [ageEndRetire, setAgeEndRetire] = useState('');
  const [moneyStartRetire, setMoneyStartRetire] = useState('');
  const [moneyDecreaseRetire, setMoneyDecreaseRetire] = useState('');
  const [moneyRealRetire, setMoneyRealRetire] = useState('');
  // Home
  const [moneyHome, setMoneyHome] = useState('');
  const [ageStartHome, setAgeStartHome] = useState('');
  const [ageEndHome, setAgeEndHome] = useState('');
  const [moneyStartHome, setMoneyStartHome] = useState('');
  const [moneyDecreaseHome, setMoneyDecreaseHome] = useState('');
  const [moneyRealHome, setMoneyRealHome] = useState('');
  // onChangeChild
  const onChangeMoneyChild = React.useCallback(
    text => setMoneyChild(text),
    [moneyChild],
  );
  const onChangeAgeStartChild = React.useCallback(
    text => setAgeStartChild(text),
    [ageStartChild],
  );
  const onChangeAgeEndChild = React.useCallback(
    text => setAgeEndChild(text),
    [ageEndChild],
  );
  const onChangeMoneyStartChild = React.useCallback(
    text => setMoneyStartChild(text),
    [moneyStartChild],
  );
  const onChangeMoneyDecreaseChild = React.useCallback(
    text => setMoneyDecreaseChild(text),
    [moneyDecreaseChild],
  );
  const onChangeMoneyRealChild = React.useCallback(
    text => setMoneyRealChild(text),
    [moneyRealChild],
  );
  ///onChangeRetire
  const onChangeMoneyRetire = React.useCallback(
    text => setMoneyRetire(text),
    [moneyRetire],
  );
  const onChangeAgeStartRetire = React.useCallback(
    text => setAgeStartHome(text),
    [ageStartRetire],
  );
  const onChangeAgeEndRetire = React.useCallback(
    text => setAgeEndRetire(text),
    [ageEndRetire],
  );
  const onChangeMoneyStartRetire = React.useCallback(
    text => setMoneyStartRetire(text),
    [moneyStartRetire],
  );
  const onChangeMoneyDecreaseRetire = React.useCallback(
    text => setMoneyDecreaseRetire(text),
    [moneyDecreaseRetire],
  );
  const onChangeMoneyRealRetire = React.useCallback(
    text => setMoneyRealRetire(text),
    [moneyRealRetire],
  );
  ///onChangeHome
  const onChangeMoneyHome = React.useCallback(
    text => setMoneyHome(text),
    [moneyHome],
  );
  const onChangeAgeStartHome = React.useCallback(
    text => setAgeStartHome(text),
    [ageStartHome],
  );
  const onChangeAgeEndHome = React.useCallback(
    text => setAgeEndHome(text),
    [ageEndHome],
  );
  const onChangeMoneyStartHome = React.useCallback(
    text => setMoneyStartHome(text),
    [moneyStartHome],
  );
  const onChangeMoneyDecreaseHome = React.useCallback(
    text => setMoneyDecreaseHome(text),
    [moneyDecreaseHome],
  );
  const onChangeMoneyRealHome = React.useCallback(
    text => setMoneyRealHome(text),
    [moneyRealHome],
  );
  const log = () => {
    console.log(
      moneyChild,
      ageStartChild,
      ageEndChild,
      moneyStartChild,
      moneyDecreaseChild,
      moneyRealChild,
    );
  };
  const log_1 = () => {
    console.log(
      moneyRetire,
      ageStartRetire,
      ageEndRetire,
      moneyStartRetire,
      moneyDecreaseRetire,
      moneyRealRetire,
    );
  };
  const log_2 = () => {
    console.log(
      moneyHome,
      ageStartHome,
      ageEndHome,
      moneyStartHome,
      moneyDecreaseHome,
      moneyRealHome,
    );
  };
  return (
    <View style={styles.container}>
      <Header title="KẾ HOẠCH TÍCH SẢN" btnLeft={() => navigation.goBack()} />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            setVisibleOne(!visibleOne);
          }}>
          <ForChild name={'TÍCH SẢN CHO CON'} />
        </TouchableOpacity>
        {visibleOne && (
          <Hander
            placeholderMoney={'Số tiền mục tiêu'}
            placeHoldeAgeStart={'Tuổi bắt đầu'}
            placeHoldeAgeEnd={'Tuổi kết thúc'}
            onChangeTextMoney={onChangeMoneyChild}
            onChangeTextAgeStart={onChangeAgeStartChild}
            onChangeTextAgeEnd={onChangeAgeEndChild}
            onChangeTextMoneyStart={onChangeMoneyStartChild}
            onChangeTextInflationary={onChangeMoneyDecreaseChild}
            onChangeTextMoneyReal={onChangeMoneyRealChild}
            onPress={log}
          />
        )}
        <TouchableOpacity
          onPress={() => {
            setVisibleTwo(!visibleTwo);
          }}>
          <ForChild name={'TÍCH SẢN CHO HƯU TRÍ'} />
        </TouchableOpacity>
        {visibleTwo && (
          <Hander
            placeholderMoney={'Chi tiêu khi nghỉ hưu/tháng'}
            placeHoldeAgeStart={'Tuổi hiện tại'}
            placeHoldeAgeEnd={'Tuổi nghỉ hưu'}
            onChangeTextMoney={onChangeMoneyRetire}
            onChangeTextAgeStart={onChangeAgeStartRetire}
            onChangeTextAgeEnd={onChangeAgeEndRetire}
            onChangeTextMoneyStart={onChangeMoneyStartRetire}
            onChangeTextInflationary={onChangeMoneyDecreaseRetire}
            onChangeTextMoneyReal={onChangeMoneyRealRetire}
            onPress={log_1}
          />
        )}
        <TouchableOpacity
          onPress={() => {
            setVisibleThree(!visibleThree);
          }}>
          <ForChild name={'TÍCH SẢN MUA NHÀ/OTO'} />
        </TouchableOpacity>
        {visibleThree && (
          <Hander
            onChangeTextMoney={onChangeMoneyHome}
            onChangeTextAgeStart={onChangeAgeStartHome}
            onChangeTextAgeEnd={onChangeAgeEndHome}
            onChangeTextMoneyStart={onChangeMoneyStartHome}
            onChangeTextInflationary={onChangeMoneyDecreaseHome}
            onChangeTextMoneyReal={onChangeMoneyRealHome}
            placeholderMoney={'Số tiền mục tiêu'}
            placeHoldeAgeStart={'Tuổi bắt đầu'}
            placeHoldeAgeEnd={'Tuổi kết thúc'}
            onPress={log_2}
          />
        )}
      </ScrollView>
    </View>
  );
};
export default Form;
