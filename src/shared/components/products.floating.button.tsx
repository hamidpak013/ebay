import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const FloatingButton = ({onPress}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* <Text style={styles.buttonText}>+</Text> */}
      <Image
        source={require('../../assets/products/plus.png')}
        style={{height: 24, width: 24}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF5216',
    borderRadius: 30,
    paddingHorizontal: 15,
    elevation: 5,
    height: 54,
    width: 54,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
