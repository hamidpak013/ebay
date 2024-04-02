import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ParamsList} from '../param.list';

type Props = {
  // route: RouteProp<ParamsList, 'addListingScreen'>;
  // navigation: StackNavigationProp<ParamsList, 'addListingScreen'>;
  navigation: any;
};
const FloatingButton: React.FC<Props> = ({navigation}) => {
  console.log('floating====', navigation);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('AddListing');
      }}>
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
