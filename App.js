import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';



export default function App(){

  const getAkkari =() => {
    
   
  }

        getAkkari()
  getAkkari()
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Akkari1.jpg')}/>
      <Text>Bienvenus sur mon app Akkari!

      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
