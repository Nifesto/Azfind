import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  contain: {
    paddingHorizontal: (windowWidth * 19) / 428,
    alignItems: 'center',
  },
  logo: {
    height: (windowWidth * 49) / 428,
    width: (windowWidth * 145) / 428,
    marginTop: (windowWidth * 60) / 428,
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (windowWidth * 85) / 428,
    height: (windowWidth * 85) / 428,
    backgroundColor: '#FFF',
    marginTop: (windowWidth * 27) / 428,
  },
  number: {
    backgroundColor: '#fff',
    width: (windowWidth * 85.75) / 428,
    height: (windowWidth * 65.33) / 428,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: (windowWidth * 27.22) / 428,
    marginLeft: (windowWidth * 25.86) / 428,
  },
  keyboard: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingRight: (windowWidth * 40) / 428,
  },
  so: {
    fontSize: 32,
    color: '#000',
    fontWeight: '600',
  },
  x: {
    width: (windowWidth * 25.42) / 428,
    height: (windowWidth * 25.42) / 428,
    margin: 10,
  },
  so_1: {
    fontSize: 70,
    color: '#404040',
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
    marginTop: (windowWidth * 30) / 428,
  },
});
export default styles;
