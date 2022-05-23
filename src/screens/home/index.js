/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderHome from '../../component/headerHome';
import Images from '../../assets';
import Drawer from '../../navigation/drawer';
import {COLOR, WIDTH} from '../../base/core';
const Item = props => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={props.src} style={styles.iconBar} />
      <Text style={styles.txtBar}>{props.content}</Text>
    </TouchableOpacity>
  );
};
const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [data] = React.useState([
    {
      name: 'FPTFPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: false,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: false,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
    {
      name: 'FPT',
      khop: '115.20',
      stop: '120.05',
      consider: '121.05',
      heart: true,
    },
  ]);
  const RenderHeader = () => {
    return (
      <>
        <Image source={Images.posterHome} style={styles.poster} />
        <View style={styles.bar}>
          <Item src={Images.iconHand} content={'Kế hoạch\ntích sản'} />
          <Item src={Images.iconHat} content={'Học tập'} />
          <Item src={Images.iconChangeMoney} content={'Nộp/\nRútTiền'} />
          <Item src={Images.iconNews} content={'Tin trong\nngày'} />
          <Item src={Images.iconStar} content={'VIP'} />
        </View>
        <Text style={styles.title}>Bảng giá tích sản</Text>
        <View style={styles.barTopInfo}>
          <View
            style={{
              ...styles.category,
              flex: 0.7,
              height: '100%',
            }}>
            <Text style={styles.titleInfo}>Mã CK</Text>
          </View>
          <View
            style={{
              ...styles.category,
              flex: 0.7,
              height: '100%',
            }}>
            <Text style={styles.titleInfo}>Khớp</Text>
          </View>
          <View style={styles.barInfo}>
            <Image
              source={Images.iconTriangleLeft}
              style={{...styles.triangle}}
            />
            <View style={styles.category}>
              <Text style={styles.titleInfo}>{`Ngừng\ntích sản`}</Text>
            </View>
            <Image
              source={Images.iconTriangleRight}
              style={{...styles.triangle}}
            />
          </View>
          <View style={{...styles.barInfo}}>
            <Image
              source={Images.iconTriangleLeft}
              style={{...styles.triangle}}
            />
            <View style={styles.category}>
              <Text style={styles.titleInfo}>{`Cân nhắc\nbán`}</Text>
            </View>
            <Image
              source={Images.iconTriangleRight}
              style={{...styles.triangle}}
            />
          </View>
          <View style={{flex: 0.3}} />
        </View>
        <View style={styles.viewIconDown}>
          <Image
            source={Images.iconTriangleDown}
            style={{...styles.triangleDown, flex: 0.7}}
          />
          <Image
            source={Images.iconTriangleDown}
            style={{...styles.triangleDown, flex: 0.7}}
          />
          <Image source={Images.iconTriangleDown} style={styles.triangleDown} />
          <Image source={Images.iconTriangleDown} style={styles.triangleDown} />
          <View style={{flex: 0.3}} />
        </View>
      </>
    );
  };
  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.containerItem,
          backgroundColor: index % 2 !== 0 ? COLOR.WHITE_P : '#F4F4F4',
        }}>
        <View style={{...styles.viewItem, flex: 0.7}}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
        </View>
        <View style={{...styles.viewItem, flex: 0.7}}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {item.khop}
          </Text>
        </View>
        <View style={styles.viewItem}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {item.stop}
          </Text>
        </View>
        <View style={styles.viewItem}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{}}>
            {item.consider}
          </Text>
        </View>
        <TouchableOpacity style={{flex: 0.3}}>
          <Image
            source={item.heart ? Images.iconHeartRed : Images.iconHeart}
            style={styles.iconHeart}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderHome onPressDraw={() => setVisible(true)} />
      <View style={{flex: 1, paddingBottom: WIDTH * 70}}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          ListHeaderComponent={RenderHeader}
          renderItem={RenderItem}
        />
      </View>
      <View>
        <Drawer visible={visible} close={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default Home;
