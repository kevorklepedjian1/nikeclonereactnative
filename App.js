import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import product from "./src/data/products"
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <ProductScreen/>
     
      <StatusBar style="auto" />
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
 
  itemcontainer: {
    width: "50%",
    padding: 1,
  },
   image: {
    width: "100%", 
    aspectRatio: 1 
  },
});
