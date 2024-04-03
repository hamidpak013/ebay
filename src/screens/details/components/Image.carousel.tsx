import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const images = [
  {id: 1, uri: require('../../../assets/products/product_1.png')},
  {id: 2, uri: require('../../../assets/products/product_2.png')},
  {id: 3, uri: require('../../../assets/products/product_1.png')},
  {id: 4, uri: require('../../../assets/products/product_4.png')},
  {id: 5, uri: require('../../../assets/product_detail.png')},
];

const ProductDetailSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState<any>(images?.[0].uri);
  const handleImagePress = id => {
    setSelectedImage(id);
  };
  const renderItem = ({item}) => {
    return (
      <ScrollView horizontal>
        {/* <Image source={{ uri: item.uri }} style={styles.thumbnail} /> */}
        <Image
          // source={require('../../../assets/product_detail.png')}
          source={item.uri}
          style={styles.thumbnail}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: images[activeIndex].uri }} style={styles.mainImage} /> */}
      <Image
        // source={require('../../../assets/product_detail.png')}
        source={image}
        style={styles.mainImage}
      />

      {/* <View style={styles.container_image}> */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        {images.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => {
              handleImagePress(image.id);
              setImage(image.uri);
            }}
            style={[
              styles.imageContainer,
              selectedImage === image.id && styles.selectedImage,
            ]}>
            <Image
              source={image.uri}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  mainImage: {
    width: 260,
    height: 250,
    resizeMode: 'cover',
  },
  paginationContainer: {
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  paginationDotInactive: {
    backgroundColor: 'lightgrey',
  },
  container_image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    // marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  selectedImage: {
    borderRadius: 16,
    // borderColor: 'lightgrey',
  },
});

export default ProductDetailSlider;
