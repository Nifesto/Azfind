import React from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import Images from '../../../assets';
import styles from './style';
import {COLOR} from '../../../base/core';
const News = () => {
  const [data, setData] = React.useState([
    {
      img: Images.iconNews,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    }, 
    {
      img: Images.iconNews,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconPaper,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconPaper,
      title:
        'Lễ ký kết thỏa thuận hợp tác giữa VMO Holdings Tech.,JSC và AzFin Việt Nam',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'FLC Stone (AMD): Kế hoạch lợi nhuận tăng 29% lên 20 tỷ đồng không chia cổ tức 2021 và 2022',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconPaper,
      title:
        'FLC Stone (AMD): Kế hoạch lợi nhuận tăng 29% lên 20 tỷ đồng không chia cổ tức 2021 và 2022',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'FLC Stone (AMD): Kế hoạch lợi nhuận tăng 29% lên 20 tỷ đồng không chia cổ tức 2021 và 2022',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconNews,
      title:
        'FLC Stone (AMD): Kế hoạch lợi nhuận tăng 29% lên 20 tỷ đồng không chia cổ tức 2021 và 2022',
      time: '12.45',
      date: '03/07/2002',
    },
  ]);
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.flt}>
        <Image style={styles.img} source={item.img} />
        <View>
          <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
          <View style={styles.times}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{height: 3, backgroundColor: COLOR.WHITE_P}} />
        )}
      />
    </View>
  );
};

export default News;
