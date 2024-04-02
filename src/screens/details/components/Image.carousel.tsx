import React, {useRef, useEffect} from 'react';
import {
  Animated,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
const images = ['1', '2', '3', '4', '5'];
const ProductDetailSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scrollX.addListener(({value}) => {
      let index = Math.round(value / width);
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }

      setActiveImage(index);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        snapToAlignment={width}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {images.map((image, index) => (
          <Image
            key={image}
            source={require('../../../assets/product_detail.png')}
            style={styles.image}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveImage(index)}
            style={[
              styles.indicator,
              {backgroundColor: index === activeImage ? 'black' : 'gray'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    width: width * images.length,
  },
  image: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default ProductDetailSlider;
