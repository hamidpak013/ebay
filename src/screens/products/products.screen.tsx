import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import NavComponent from '../../shared/components/nav.component';
import FloatingButton from '../../shared/components/products.floating.button';

const data = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
  {id: '8', title: 'Item 8'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
  {id: '8', title: 'Item 8'},
];
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const ProductsScreen = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <Image
        source={require('../../assets/products/product_1.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Pokémon Card</Text>
      <Text style={styles.title}>$149.00</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* navbar */}
      <NavComponent />
      <Text style={{fontSize: 24, fontWeight: '600', margin: 20}}>
        Track Your Product✌️
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
      <FloatingButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    // padding: 10,
    height: '100%',
    width: '100%',
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    margin: 5,
    // width: screenWidth / 2 - 20,
    width: (screenWidth - 20) / numColumns, // Calculate item width dynamically
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
  },
  image: {
    width: 130,
    height: 130,
  },
});
export default ProductsScreen;
