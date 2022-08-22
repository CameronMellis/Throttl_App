import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/bugattiChiron.jpg')}
        style={styles.carImage}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Bugatti Chiron</Text>
        <Text style={styles.subtitle}>$10,000/day</Text>
      </View>

      <StyledButton type="primary" 
      content={"Book this car"} 
      onPress={() => {

      }} />

<StyledButton type="secondary" 
      content={"Specifications"}
      onPress={() => {
        
      }} />

    </View>
  );
};

export default CarItem;
