import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const NavComponent = () => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity>
        <Image source={require('../../assets/menu.png')} style={styles.image} />
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Products
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/notification.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 20,
  },
  image: {
    width: 48,
    height: 48,
  },
});

export default NavComponent;
