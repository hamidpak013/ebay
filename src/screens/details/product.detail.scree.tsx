import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {ParamsList} from '../../shared/param.list';
import {StackNavigationProp} from '@react-navigation/stack';
import {LineChart} from 'react-native-chart-kit';
import ProductDetailSlider from './components/Image.carousel';

type Props = {
  route: RouteProp<ParamsList, 'Notification'>;
  navigation: StackNavigationProp<ParamsList, 'Notification'>;
};

interface ItemSpecificsProps {
  left: string;
  right: string;
}

const ItemSpecifics = ({left, right}: ItemSpecificsProps) => {
  return (
    <View style={styles.itemSpecificsContainer}>
      <Text style={styles.itemSpecificsLabel}>{left}:</Text>
      <Text style={styles.itemSpecificsValue}>{right}</Text>
    </View>
  );
};

const PokemonCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pokémon Pikachu Moon Bathing with The Starry Night Van Gogh Card
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>299.00$</Text>
        <Text style={styles.sold}>8 sold in last 24 hours</Text>
      </View>
      <View style={styles.itemSpecifics}>
        <ItemSpecifics
          left="Condition"
          right="Ungraded - Near mint or better: Not in original packaging or professionally graded"
        />
        <ItemSpecifics left="Set" right="Scarlet & Violet - 151" />
        <ItemSpecifics
          left="Character"
          right="Bea, Nessa, Leon, Drednaw, Charizard, Charmander, Charmeleon, Pikachu, Raikou"
        />
        <ItemSpecifics left="Card Condition" right="Near Mint" />
        <ItemSpecifics left="Year Manufactured" right="6+" />
        <ItemSpecifics
          left="Country/Region of Manufacture"
          right="United States"
        />
        <ItemSpecifics left="Attribute/MTG:Color" right="Energy" />
        <ItemSpecifics left="Game" right="Pokémon TCG" />
        <ItemSpecifics left="Manufacturer" right="Nintendo" />
        <ItemSpecifics left="Features" right="Collectors Edition" />
        <ItemSpecifics left="Language" right="Collectors Edition" />
        <ItemSpecifics left="Card Type" right="Pokémon" />
      </View>
    </View>
  );
};

const LineChartExample = () => {
  return (
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: 'white',
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(255, 82, 22, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 82, 22, ${opacity})`,
        style: {
          borderRadius: 16,
          backgroundColor: 'black',
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 8,
      }}
    />
  );
};
const ProductDetailScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: 44,
        display: 'flex',
        flex: 1,
        marginHorizontal: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={{height: 200}}></View> */}
        <ProductDetailSlider />
        <View>
          <Text>Bezier Line Chart</Text>
          <Text>Price Drop</Text>
          <Text>Price Drop</Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              //   paddingHorizontal: 5,
              marginVertical: 20,
            }}>
            <LineChartExample />
          </View>
        </View>
        <PokemonCard />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#DB5114',
  },

  sold: {
    fontSize: 12,
    fontWeight: '400',
    color: '#828282',
  },

  itemSpecifics: {
    width: '100%',
  },

  itemSpecificsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },

  itemSpecificsLabel: {
    fontWeight: '500',
    fontSize: 12,
    width: '40%',
  },

  itemSpecificsValue: {
    fontWeight: 'normal',
    fontSize: 10,
    width: '60%',
    color: '#717886',
  },
});
export default ProductDetailScreen;
