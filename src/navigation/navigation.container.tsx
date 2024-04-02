import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from '../screens/notifications/notifications.screen';
import AddListingScreen from '../screens/AddListing/add.listing.screen';
import ProductsScreen from '../screens/products/products.screen';
import ProductDetailScreen from '../screens/details/product.detail.scree';

export type RootStackParamList = {
  Product: undefined;
  Notification: undefined;
  AddListing: undefined;
};

const Stack = createStackNavigator();

const NavigationContainerScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen
          name="Product"
          component={ProductsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detail"
          component={ProductDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddListing"
          component={AddListingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationContainerScreen;
