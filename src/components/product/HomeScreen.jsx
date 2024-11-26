import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStyle from '../styles/HomeScreenStyle';
import ItemProduct from '../../components/assets/items/ItemProduct';
import {getProduct} from '../../rtk/API';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState([]);
  const cartItem = useSelector(state => state.app.cart);

  const onGetProduct = async () => {
    try {
      const result = await dispatch(getProduct());
      console.log(result.payload);
      setDataProduct(result.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetProduct();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefreshProduct = async () => {
    setRefreshing(true);
    await onGetProduct();
    setRefreshing(false);
  };

  const navigation = useNavigation();

  const detail = id => {
    navigation.navigate('Detail', {idProduct: id._id});
  };

  const renderHeader = () => (
    <>
      <View
        style={[
          HomeScreenStyle.container,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <Text style={[HomeScreenStyle.title, {lineHeight: 35}]}>
          Planta - tỏa sáng{'\n'} không gian nhà bạn
        </Text>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/images/cart.png')}
          />
        </Pressable>
      </View>
      <View>
        <ImageBackground
          style={HomeScreenStyle.img}
          source={require('../assets/images/image_homescreen.png')}>
          <Text
            style={[
              HomeScreenStyle.container,
              {color: '#007537', fontSize: 20, marginTop: 10},
            ]}>
            Xem hàng mới về{' '}
            <Icon name="arrow-right" size={24} color={'#007537'} />
          </Text>
        </ImageBackground>
      </View>
      <Text
        style={[
          HomeScreenStyle.container,
          HomeScreenStyle.title,
          {marginTop: 10},
        ]}>
        Cây trồng
      </Text>
    </>
  );

  const renderFooter = () => (
    <>
      <Text style={styles.textAll}>Xem thêm Cây trồng</Text>
      <Text
        style={[
          HomeScreenStyle.container,
          HomeScreenStyle.title,
          {marginTop: 10},
        ]}>
        Combo chăm sóc (mới)
      </Text>
      <View
        style={[
          HomeScreenStyle.containerWrap,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View
          style={[
            HomeScreenStyle.containerWrapContent,
            {
              flexDirection: 'column',
              justifyContent: 'center',
              marginHorizontal: 20,
            },
          ]}>
          <Text style={HomeScreenStyle.titleName}>Lemon Balm Grow Kit</Text>
          <Text style={HomeScreenStyle.content}>
            Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh
            dấu...
          </Text>
        </View>
        <Image
          source={require('../assets/images/lemon_balm_grow_kit.png')}
          style={HomeScreenStyle.imgOther}
        />
      </View>
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      showsVerticalScrollIndicator={false}
      data={dataProduct}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => detail(item)}>
          <ItemProduct dataProduct={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item._id}
      numColumns={2}
      refreshing={refreshing}
      onRefresh={onRefreshProduct}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textAll: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
    color: '#221F1F',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
});
