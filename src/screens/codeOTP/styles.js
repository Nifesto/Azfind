import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: (windowWidth * 19) / 428,
    alignItems: 'center',
  },
  text: {
    marginTop: (windowWidth * 57) / 428,
    color: '#000',
    fontSize: 18,
  },
  text_1: {
    marginTop: (windowWidth * 20) / 428,
    color: '#000',
    fontSize: 18,
  },
  input: {
    letterSpacing: 5,
    paddingHorizontal: 72,
    marginTop: (windowWidth * 20) / 428,
    backgroundColor: '#fff',
    width: (windowWidth * 267) / 428,
    height: (windowWidth * 56) / 428,
    fontSize: 32,
    color: '#000',
    fontWeight: '600',
  },
  txtCf: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  confirm: {
    backgroundColor: '#0E448A',
    width: '100%',
    height: (windowWidth * 60) / 428,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: (windowWidth * 337) / 428,
  },
});
export default styles;
