/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ProductsScreen from './src/screens/products/products.screen';
import NotificationScreen from './src/screens/notifications/notifications.screen';
import AddListingScreen from './src/screens/AddListing/add.listing.screen';
import NavigationContainerScreen from './src/navigation/navigation.container';

function App(): React.JSX.Element {
  // return <ProductsScreen />;
  // return <NotificationScreen />;
  // return <AddListingScreen />;
  return <NavigationContainerScreen />;
}

export default App;
