import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import NavComponent from '../../shared/components/nav.component';
import FloatingButton from '../../shared/components/products.floating.button';

import {products} from '../../shared/dummyData/Products';
import SearchComponent from './components/search.component';
import ProductItem from './components/product.item';

const numColumns = 2;
const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      {/* navbar */}
      <NavComponent screenName={'product'} />
      <Text style={styles.heading}>Track Your Product✌️</Text>
      <SearchComponent />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={product => <ProductItem item={product.item} />}
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
    paddingBottom: 10,
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
