import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

interface ProductItemProps {
  item: {
    id: string;
    price: string;
    title: string;
    img: any;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({item}) => {
  console.log('item====', item);
  return (
    <View style={styles.item}>
      <View style={styles.contentContainer}>
        <Image source={item.img} style={styles.image} />
        <View style={{width: '100%', padding: 20}}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.content}>
            <Text style={(styles.title, {color: '#FF5216'})}>$149.00</Text>
            <TouchableOpacity style={styles.arrow_right}>
              <Image
                source={require('../../../assets/products/arrow-right.png')}
                style={{width: 14, height: 14}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
  },
  arrow_right: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 130,
    resizeMode: 'contain',
  },
  item: {
    margin: 5,
    backgroundColor: 'white',
    width: (screenWidth - 40) / numColumns,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    shadowColor: '#342F2F',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    // Elevation for Android
    elevation: 2,
  },
});
export default ProductItem;
