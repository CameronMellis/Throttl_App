import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    positiona: 'absolute',
    marginTop: '50%',
    backgroundColor: 'transparent',
  },

  modal: {
    backgroundColor: 'black',
  },

  input: {
    width: '90%',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingLeft: 20,
    textTransform: 'uppercase',
    margin: 20,
    borderWidth: 3,
    padding: 15,
  },
});

export default styles;
