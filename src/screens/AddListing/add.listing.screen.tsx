// import React from 'react';
// import {View, Text} from 'react-native';

// const AddListingScreen = () => {
//   return (
//     <View>
//       <Text>AddListingScreen</Text>
//     </View>
//   );
// };

// export default AddListingScreen;

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import NavComponent from '../../shared/components/nav.component';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamsList} from '../../shared/param.list';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<ParamsList, 'Notification'>;
  navigation: StackNavigationProp<ParamsList, 'Notification'>;
};
const AddListingScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavComponent
        screenName="listing"
        leftButton={() => navigation.goBack()}
      />
      <View style={styles.containerSpacing}>
        <View>
          <Text style={styles.title}>Product ID</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Eevee AR sv5a 078/066 Pokemon"
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 44 : 10,
    backgroundColor: 'white',
  },
  containerSpacing: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    height: 40,
    borderColor: 'transparent',
  },
  button: {
    backgroundColor: '#FF5216',
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
    height: 47,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddListingScreen;
