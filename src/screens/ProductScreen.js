import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import product from "../data/products"

function ProductScreen() {
  return (
    <FlatList 
    data={product}
    renderItem={({item}) =>(
     <View style={styles.itemcontainer}> 
     <Image source={{uri: item.image}}   style={styles.image}/>
     </View>
    )}
    numColumns={2}
  />
  )
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

export default ProductScreen