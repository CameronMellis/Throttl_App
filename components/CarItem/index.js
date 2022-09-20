import React, { useState } from 'react';
import { View, Text, ImageBackground, Modal } from 'react-native';
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

      <Modal visible={modalVisible} animationType={'slide'}>
        <View style={styles.container}>
          <Text>Modal is open!</Text>
          <StyledButton type='primary' content={'Close'} onPress={() => setModalVisible(false)} />
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
