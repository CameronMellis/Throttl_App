import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require('./assets/images/bugattiChiron.jpg')}
          style={styles.carImage}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Bugatti Chiron</Text>
          <Text style={styles.subtitle}>$10,000/day</Text>
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carContainer: {
    width: '100%',
    height: '100%',
  },

  titles: {
    marginTop: '20%',
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
  },

  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  },
});
