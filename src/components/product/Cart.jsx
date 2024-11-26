import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ItemCart from '../assets/items/ItemCart';
import {useSelector} from 'react-redux';
import CartStyle from '../styles/CartStyle';
import formatPrice from '../utils/formatPrice';
const Cart = props => {
  const {navigation} = props;
  const data = useSelector(state => state.app.cart);
  const [total, setTotal] = useState(0);

  const pressBack = () => {
    navigation.navigate('Home');
  };
  useEffect(() => {
    if (data.length > 0) {
      const total = data.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      setTotal(total);
    } else {
      setTotal(0);
    }
  }, [data]);

  return (
    <View style={CartStyle.container}>
      <View style={CartStyle.conatainerHeader}>
        <TouchableOpacity onPress={pressBack}>
          <Image source={require('../assets/images/back_screen.png')} />
        </TouchableOpacity>
        <Text style={CartStyle.title}>Giỏ hàng</Text>
        <Image source={require('../assets/images/trash.png')} />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <ItemCart data={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
      />
      <View style={CartStyle.tamtinh}>
        <Text>Tạm tính</Text>
        <Text style={CartStyle.total}>{formatPrice(total)}</Text>
      </View>
      <TouchableOpacity style={CartStyle.button}>
        <Text style={CartStyle.textButton}>Tiến hành thanh toán</Text>
        <Image source={require('../assets/images/chevron-right.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
