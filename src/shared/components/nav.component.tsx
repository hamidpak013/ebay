import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
type Props = {
  screenName: string;
  navigation?: any;
  leftIcon?: any;
  rightIcon?: any;
  leftButton?: () => void;
  rightButton?: () => void;
};
const NavComponent: React.FC<Props> = ({
  screenName,
  navigation,
  leftButton,
  rightButton,
}) => {
  return (
    <View>
      {/* ====================== Product Nav-Bar screen  ===================== */}
      {screenName === 'product' && (
        <View style={styles.nav}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/menu.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Products
            </Text>
          </View>
          <TouchableOpacity onPress={rightButton}>
            <Image
              source={require('../../assets/notification.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      )}
      {/* ====================== Notification screen  ===================== */}
      {screenName === 'notification' && (
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={leftButton}
            // onPress={() => {
            //   console.log('navigation====', navigation);
            //   navigation.goBack();
            // }}
          >
            <Image
              source={require('../../assets/back-arrow.png')}
              style={{width: 48, height: 48}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Notification
            </Text>
          </View>
          <TouchableOpacity />
        </View>
      )}

      {/* ====================== detail screen  ===================== */}
      {screenName === 'detail' && (
        <View style={styles.nav}>
          <TouchableOpacity onPress={leftButton}>
            <Image
              source={require('../../assets/back-arrow.png')}
              style={styles.image}
            />
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
              source={require('../../assets/favriout.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      )}

      {/* ====================== add listing nav ===================== */}

      {screenName === 'listing' && (
        <View style={styles.nav}>
          <TouchableOpacity onPress={leftButton}>
            <Image
              source={require('../../assets/back-arrow.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Add Listing
            </Text>
          </View>
          <TouchableOpacity />
        </View>
      )}
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
