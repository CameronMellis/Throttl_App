import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  titles: {
    marginTop: '25%',
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: 'black',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 45,
    width: '100%',
  },

  // modalContainer: {
  //   width: '100%',
  //   height: '100%',
  //   positiona: 'absolute',
  //   marginTop: '50%',
  //   backgroundColor: 'transparent',
  // },

  // modal: {
  //   backgroundColor: 'black',
  // },

  // input: {
  //   width: '90%',
  //   fontSize: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingTop: 15,
  //   paddingLeft: 20,
  //   textTransform: 'uppercase',
  //   margin: 20,
  //   borderWidth: 3,
  //   padding: 15,
  // },
});

export default styles;
