import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import formatPrice from '../../utils/formatPrice';
import {useNavigation} from '@react-navigation/native';

const ItemProduct = props => {
  const {dataProduct} = props;
  const navigattion = useNavigation();
  // const handlePress = () => {
  //   navigattion.navigate('DetailPlantScreen', {detail: item._id});
  // };
  if (!dataProduct) {
    // If dataProduct is undefined, return null or some fallback UI
    return null;
  }
  // <TouchableOpacity style={styles.containerWrap} onPress={handlePress}>
  //   </TouchableOpacity>

  return (
    <View style={styles.containerWrap}>
      <View style={styles.containerImg}>
        <Image source={{uri: dataProduct.image}} style={styles.img} />
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {dataProduct.name}
      </Text>
      <Text style={styles.preference}>{dataProduct.type}</Text>
      <Text style={styles.price}>{formatPrice(dataProduct.price)}</Text>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    marginHorizontal: 30,
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
    resizeMode: 'contain', // Ensures the image fits within the dimensions without being cropped
  },
  name: {
    color: '#221F1F',
    fontSize: 16,
    fontWeight: 'medium',
    flexWrap: 'wrap',
  },
  preference: {
    fontSize: 14,
  },
  price: {
    color: '#007537',
    fontSize: 16,
  },
});
