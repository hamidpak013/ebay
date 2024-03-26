import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FloatingButton = ({onPress}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF5216',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
