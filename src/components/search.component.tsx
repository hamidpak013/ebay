import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const SearchComponent = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        paddingBottom: 20,
        // marginBottom: 20,
      }}>
      <TextInput
        placeholder="Search"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          height: 52,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          borderRadius: 10,
          // Shadow properties for iOS
          shadowColor: '#342F2F',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 2,
          // Elevation for Android
          elevation: 2,
        }}
      />
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginLeft: 10,
          backgroundColor: 'white',
          width: 54,
          height: 54,
          justifyContent: 'center',
          alignContent: 'center',
          borderRadius: 10,
          alignItems: 'center',
          // Shadow properties for iOS
          shadowColor: '#342F2F',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 2,
          // Elevation for Android
          elevation: 2,
        }}>
        <Image
          source={require('../assets/products/filter.png')}
          //   eslint-disable-next-line react-native/no-inline-styles
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchComponent;
