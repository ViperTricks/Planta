import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import formatPrice from '../../src/components/utils/formatPrice';


const ItemPlanter = props => {
  const {dataPlanter} = props;
  return (
    <View style={styles.containerWrap}>
      <View style={styles.containerImg}>
        <Image source={dataPlanter.img} style={styles.img} />
      </View>
      <Text style={styles.name}>{dataPlanter.name}</Text>
      <Text style={styles.price}>{formatPrice(dataPlanter.price)}</Text>

    </View>
  );
};

export default ItemPlanter;

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 20,
    width: 150,
    marginBottom: 15,
  },
  containerImg: {
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
  },
  img: {
    width: 'auto',
    height: 140,
  },
  name: {
    color: '#221F1F',
    fontSize: 16,
    fontWeight: 'medium',
  },
  price: {
    color: '#007537',
    fontSize: 16,
  },
});
