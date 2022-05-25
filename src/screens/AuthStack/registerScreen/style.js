import {StyleSheet} from 'react-native';
import {COLOR, WIDTH, FONTSIZE} from '../../../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: WIDTH*44,
    marginLeft: WIDTH*18,
  },
  title: {
    fontSize: FONTSIZE.f_18,
    fontWeight: '700',
    color: '#0E448A',
  },
  iconBack: {
    width:WIDTH*23,
    height: WIDTH*23,
    resizeMode: 'contain',
    marginRight: WIDTH*14,
  },
  input: {
    width: WIDTH*365,
    height: WIDTH*59,
    borderWidth: WIDTH*1,
    marginLeft: WIDTH*23,
    marginRight: WIDTH*12,
    borderRadius:WIDTH*49,
    paddingLeft: WIDTH*19,
    marginVertical: WIDTH*23,
  },
  button: {
    width:  WIDTH*365,
    height: WIDTH*59,
    marginHorizontal: WIDTH*17,
    backgroundColor: '#0E448A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH*6,
    marginBottom:WIDTH*15,
  },
  TextInput: {
    fontSize: FONTSIZE.f_18,
    fontWeight: '700',
    color: '#FFF',
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Text: {
    fontSize: FONTSIZE.f_15,
    color: '#000',
  },
});
export default styles;
