import React, { useState } from 'react';
import { View, Text, ImageBackground, Modal, TextInput } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, image } = props.car;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>

      <Modal
        visible={modalVisible}
        style={styles.modal}
        animationType={'slide'}
      >
        <View style={styles.modalContainer}>
          <TextInput style={styles.input} placeholder='Name' />
          <TextInput style={styles.input} placeholder='Email' />
          <TextInput style={styles.input} placeholder='Phone Number' />
          <StyledButton
            type='primary'
            content={'Close'}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content={'Book this car'}
          onPress={() => {
            setModalVisible(true);
          }}
        />

        <StyledButton
          type='secondary'
          content={'Specifications'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;
