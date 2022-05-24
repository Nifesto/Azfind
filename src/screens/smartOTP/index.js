import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../assets';
import Header from '../../component/header';
const KeyOpen = () => {
  const [code, setCode] = React.useState('');
  const [board, setBoard] = useState([
    {
      id: 1,
      so: '1',
    },
    {
      id: 2,
      so: '2',
    },
    {
      id: 3,
      so: '3',
    },
    {
      id: 4,
      so: '4',
    },
    {
      id: 5,
      so: '5',
    },
    {
      id: 6,
      so: '6',
    },
    {
      id: 7,
      so: '7',
    },
    {
      id: 8,
      so: '8',
    },
    {
      id: 9,
      so: '9',
    },
    {
      id: 10,
      so: '0',
    },
    {
      id: 11,
      so: 'X',
    },
  ]);
  const print = item => {
    let copied = [...board];
    copied.map(element => {
      if (item.id === 11) {
        clear();
      } else if (item.id === element.id) {
        if (code.length < 4) {
          setCode(code + item.so);
        }
      }
    });
  };
  const clear = () => {
    setCode('');
  };
  console.log(code);
  return (
    <View style={styles.container}>
      <Header title="Nhập mã mở khóa Smart otp" />
      <View style={styles.contain}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
        <View style={styles.input_container}>
          <View style={styles.text}>
            <Text style={styles.so_1}>{!!code[0] ? '•' : ''}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.so_1}>{!!code[1] ? '•' : ''}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.so_1}>{!!code[2] ? '•' : ''}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.so_1}>{!!code[3] ? '•' : ''}</Text>
          </View>
        </View>
        <View style={styles.keyboard}>
          {board.map((item, index) => {
            if (index > 11) {
              return;
            } else if (index === 11 || index === board.length - 1) {
              return (
                <TouchableOpacity
                  style={styles.number}
                  key={index}
                  onPress={() => print(item)}>
                  <View style={{backgroundColor: '#DBDBDB', borderRadius: 25}}>
                    <Image
                      source={Images.iconClose}
                      resizeMode="contain"
                      style={styles.x}
                    />
                  </View>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  style={styles.number}
                  key={index}
                  onPress={() => print(item)}>
                  <Text style={styles.so}>{item.so}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        {!!code && code.length > 3 && (
          <TouchableOpacity style={styles.confirm}>
            <Text style={styles.txtCf}>XÁC NHẬN</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default KeyOpen;
