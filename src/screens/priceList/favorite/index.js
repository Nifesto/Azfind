/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../assets';
import {COLOR, WIDTH} from '../../../base/core';

const Favorite = () => {
  const [dataStock] = React.useState([
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
      <View style={styles.viewAdd}>
        <Text>Danh mục</Text>
        <View style={styles.cate}>
          <Text style={styles.txtSearch}>Tìm mã</Text>
        </View>
        <TouchableOpacity>
          <Image source={Images.iconPlus} style={styles.iconPlus} />
        </TouchableOpacity>
      </View>
      <View style={styles.head}>
        <TouchableOpacity style={styles.btnSearch}>
          <Image source={Images.iconSearch} style={styles.iconSearch} />
          <Text style={styles.txtSearch}>Tìm mã</Text>
        </TouchableOpacity>
      </View>
      <RenderHeader />
      <View style={{flex: 1, paddingBottom: WIDTH * 75}}>
        <FlatList
          data={dataStock}
          keyExtractor={(_, index) => index.toString()}
          //   ListHeaderComponent={RenderHeader}
          renderItem={RenderItem}
        />
      </View>
    </View>
  );
};

export default Favorite;
