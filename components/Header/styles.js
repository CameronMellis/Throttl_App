import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  logo: {
    width: 90,
    height: 30,
    resizeMode: 'contain',
  },
  menu: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  }
});

export default styles;