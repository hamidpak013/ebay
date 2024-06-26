import React from 'react';
import {
  SectionList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import NavComponent from '../../shared/components/nav.component';
import {notificationsList} from '../../shared/dummyData/Notifications';

const NotificationItem = ({item}) => {
  return (
    <View style={styles.notificationContainer}>
      <Image
        // source={require(`assets/${item.image}.png`)}
        source={item.image}
        style={styles.image}
      />
      <View style={styles.notificationContent}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Text style={styles.description} numberOfLines={2}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>{item.title}</Text>{' '}
          <Text style={{color: '#666'}}>{item.description}</Text>
        </Text>
      </View>
      <TouchableOpacity style={{marginLeft: 30}}>
        <Image
          source={require('../../assets/notificaiton/option.png')}
          style={styles.option}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderBottomColor: '#ccc', // Bottom border color
    borderBottomWidth: 1, // Bottom border width
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 2, // For Android shadow
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    // color: '#666',
  },
  option: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
});

const NotificationScreen = () => {
  return (
    <View style={{marginTop: 44, paddingBottom: 60}}>
      <NavComponent screenName={'notification'} />
      <SectionList
        sections={notificationsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NotificationItem item={item} />}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        contentContainerStyle={{flexGrow: 1}}
      />
    </View>
  );
};

export default NotificationScreen;
