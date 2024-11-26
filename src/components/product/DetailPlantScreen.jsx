import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DetailPlantScreenStyle from '../styles/DetailPlantScreenStyle';
import formatPrice from '../utils/formatPrice';
import {addItemToCart} from '../../rtk/Reducer';
import { getDetail} from '../../rtk/API';
import Cart from './Cart';

const DetailPlantScreen = props => {
  const {navigation, route} = props;
  const {params} = route;
  const screenWidth = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.app.cart);
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const pricePerUnit = 250000;
  const flatListRef = useRef(null);

  console.log(params.idProduct);
  const onGetDetailProduct = async id => {
    try {
      const result = await dispatch(getDetail(id));
      console.log(result.payload);
      setProductDetail(result.payload);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    onGetDetailProduct(params.idProduct);
  }, [params.idProduct]);

  if (!productDetail) {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 50}}>
          Loading...
        </Text>
      </View>
    );
  }
  console.log('cart: ', cart);

  const addItemCart = () => {
    const item = {
      _id: productDetail._id,
      name: productDetail.name,
      price: productDetail.price,
      image: productDetail.image,
      type: productDetail.type,
      quantity: 1,
    };
    dispatch(addItemToCart(item));
    navigation.navigate('Cart');
  };

  const pressBack = () => {
    navigation.navigate('Home');
  };

  const pressCart = () => {
    navigation.navigate('Cart');
  };

  // const handleNext = () => {
  //   if (currentIndex < productDetail.image.length - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //     flatListRef.current.scrollToIndex({index: currentIndex + 1});
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //     flatListRef.current.scrollToIndex({index: currentIndex - 1});
  //   }
  // };

  // const handleScroll = event => {
  //   const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
  //   setCurrentIndex(index);
  // };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
  };

  const totalPrice = quantity * pricePerUnit;

  return (
    <View style={DetailPlantScreenStyle.background}>
      <View style={DetailPlantScreenStyle.container}>
        <View style={DetailPlantScreenStyle.conatainerHeader}>
          <TouchableOpacity onPress={pressBack}>
            <Image source={require('../assets/images/back_screen.png')} />
          </TouchableOpacity>
          <Text style={DetailPlantScreenStyle.title}>{productDetail.name}</Text>
          <TouchableOpacity onPress={pressCart}>
            <Image source={require('../assets/images/cart.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={DetailPlantScreenStyle.containerWrapImg}>
        <Image
          style={{height: 200, width: 250, resizeMode: 'contain'}}
          source={{uri: productDetail.image}}
        />
        <View style={DetailPlantScreenStyle.navigationContainer}>
          <TouchableOpacity
            // onPress={handlePrevious}
            style={DetailPlantScreenStyle.arrow}>
            <Image source={require('../assets/images/previous.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={handleNext}
            style={DetailPlantScreenStyle.arrow}>
            <Image source={require('../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={DetailPlantScreenStyle.conatainerPlantAndPreference}>
        <View style={DetailPlantScreenStyle.viewBox}>
          <Text style={DetailPlantScreenStyle.text}>Cây trồng</Text>
        </View>
        <View style={DetailPlantScreenStyle.viewBox}>
          <Text style={DetailPlantScreenStyle.text}>{productDetail.type}</Text>
        </View>
      </View>
      <View style={DetailPlantScreenStyle.container}>
        <Text
          style={[
            {
              fontSize: 24,
              color: '#007537',
              marginLeft: 30,
              fontWeight: 'medium',
            },
          ]}>
          250.000đ
        </Text>
        <Text style={DetailPlantScreenStyle.title}>Chi tiết sản phẩm</Text>
        <View style={DetailPlantScreenStyle.lineBold} />

        <View style={DetailPlantScreenStyle.row}>
          <Text style={DetailPlantScreenStyle.label}>Kích cỡ</Text>
          <Text style={DetailPlantScreenStyle.value}>Nhỏ</Text>
        </View>
        <View style={DetailPlantScreenStyle.lineLight} />

        <View style={DetailPlantScreenStyle.row}>
          <Text style={DetailPlantScreenStyle.label}>Xuất xứ</Text>
          <Text style={DetailPlantScreenStyle.value}>Châu Phi</Text>
        </View>
        <View style={DetailPlantScreenStyle.lineLight} />

        <View style={DetailPlantScreenStyle.row}>
          <Text style={DetailPlantScreenStyle.label}>Tình trạng</Text>
          <Text
            style={[
              DetailPlantScreenStyle.value,
              DetailPlantScreenStyle.stock,
            ]}>
            Còn 156 sp
          </Text>
        </View>
        <View style={DetailPlantScreenStyle.lineLight} />
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.title}>Đã chọn {quantity} sản phẩm</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={[
                  styles.button,
                  {borderColor: quantity === 0 ? '#7D7B7B' : '#000'},
                ]}>
                <Text
                  style={[
                    styles.buttonText,
                    {color: quantity === 0 ? '#7D7B7B' : '#000'},
                  ]}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                onPress={increaseQuantity}
                style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'column', gap: 10}}>
            <Text style={{fontSize: 16, alignSelf: 'flex-end'}}>Tạm tính</Text>
            <Text style={styles.price}>{totalPrice}đ</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => addItemCart()}
          style={[
            styles.buyButton,
            {backgroundColor: quantity > 0 ? '#007537' : '#ccc'},
          ]}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPlantScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    width: 30,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
    color: '#000',
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'flex-end',
    color: '#000',
  },
  buyButton: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
