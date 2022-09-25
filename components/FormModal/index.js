import React, { useState } from 'react';
import { View, ImageBackground, Modal, TextInput } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const FormModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal visible={modalVisible} style={styles.modal} animationType={'slide'}>
      <View style={styles.modalContainer}>
        <TextInput style={styles.input} placeholder='Name' />
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.input} placeholder='Phone Number' />
        <StyledButton type='primary' content={'Submit'} />
        <StyledButton
          type='secondary'
          content={'Close'}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </Modal>
  );
};

export default FormModal;
