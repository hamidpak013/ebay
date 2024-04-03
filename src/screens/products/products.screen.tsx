import React from 'react';
import {Text, View, StyleSheet, FlatList, Platform} from 'react-native';
import NavComponent from '../../shared/components/nav.component';
import FloatingButton from '../../shared/components/products.floating.button';

import {products} from '../../shared/dummyData/Products';
import SearchComponent from './components/search.component';
import ProductItem from './components/product.item';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamsList} from '../../shared/param.list';

const numColumns = 2;
type Props = {
  route: RouteProp<ParamsList, 'ProductsScreen'>;
  navigation: StackNavigationProp<ParamsList, 'ProductsScreen'>;
};
const ProductsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* navbar */}
      <NavComponent
        screenName={'product'}
        navigation={navigation}
        rightButton={() => navigation.navigate('Notification')}
      />
      <Text style={styles.heading}>Track Your Product✌️</Text>
      <SearchComponent />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={product => (
          <ProductItem
            handleTap={() => {
              navigation.navigate('detail');
            }}
            item={product.item}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={{flexGrow: 1}}
      />
      <FloatingButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
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
