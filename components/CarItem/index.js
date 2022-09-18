import React, { useState } from 'react';
import { View, Text, ImageBackground, Modal } from 'react-native';
import FormModal from '../FormModal/form';
import StyledButton from '../StyledButton';
import styles from './styles';
require = FormModal;

const CarItem = (props) => {
  const { name, tagline, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content={'Book this car'}
          onPress={() => {
            {
              setModalIsOpenToTrue;
            }
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
