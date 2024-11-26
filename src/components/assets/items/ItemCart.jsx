import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {removeItem, changeQuantity} from '../../../rtk/Reducer';
const ItemCart = props => {
  const {data} = props;
  const dispatch = useDispatch();
  const removeItemCart = () => {
    dispatch(removeItem(data._id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(changeQuantity({_id: data._id, change: 1}));
  };

  const handleDecreaseQuantity = () => {
    dispatch(changeQuantity({_id: data._id, change: -1}));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: data.image}} />
      <View>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.textPrice}>{data.price}</Text>
        <View style={styles.delete}>
          <View style={styles.containerQuantity}>
            <TouchableOpacity
              onPress={() => handleDecreaseQuantity()}
              style={styles.borderquantity}>
              <Text style={[styles.textquantity]}>-</Text>
            </TouchableOpacity>
            <Text style={styles.textquantity}>{data.quantity}</Text>
            <TouchableOpacity
              onPress={() => handleIncreaseQuantity()}
              style={styles.borderquantity}>
              <Text style={[styles.textquantity]}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => removeItemCart()}>
            <Text style={styles.Textdelete}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      img: {
        width: 77,
        height: 77,
        marginRight:10
      },
      text: {
        color: 'black',
        fontSize: 16,
      },
      textPrice: {
        color: 'green',
        fontSize: 16,
      },
      borderquantity: {
        borderWidth: 2,
        width: 30,
        height: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textquantity: {
        color: 'black',
        fontSize: 16,
      },
      containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        width: 100,
      },
      delete: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 180,
        alignItems: 'center',
      },
      Textdelete: {
        color:'black',
        fontSize:18
      },
});
