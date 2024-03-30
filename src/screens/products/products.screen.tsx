import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import NavComponent from '../../shared/components/nav.component';
import FloatingButton from '../../shared/components/products.floating.button';
import SearchComponent from '../../components/search.component';
import ProductItem from '../../components/product.item';
import {products} from '../../shared/dummyData/Products';

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

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      {/* navbar */}
      <NavComponent />
      <Text style={styles.heading}>Track Your Product✌️</Text>
      <SearchComponent />
      <FlatList
        data={products}
        renderItem={ProductItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={{flexGrow: 1}}
      />
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 44,
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
  },
  image: {
    height: 130,
    resizeMode: 'contain',
  },
});
export default ProductsScreen;
