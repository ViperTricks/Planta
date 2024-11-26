import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProfileStyle from '../styles/ProfileStyle';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../rtk/Reducer';
import {getProfile} from '../../rtk/API';
import DetailPlantScreenStyle from '../styles/DetailPlantScreenStyle';

const Profile = props => {
  const {navigation, route} = props;
  const {params} = route;
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState([]);
  const user = useSelector(state => state.app.user); // Assuming your user data is in state.user.data
  const pressLogout = () => {
    dispatch(logout());
  };
  const onGetProfile = async () => {
    try {
      const result = await dispatch(getProfile());
      console.log(result.payload);
      setDataUser(result.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetProfile();
  }, []);

  const pressEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.containerHeader}>
        <Text style={ProfileStyle.title}>Profile</Text>
      </View>
      <View style={ProfileStyle.containerInfo}>
        <Image
          source={require('../assets/images/black_love_anthurium.png')}
          style={ProfileStyle.img}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{color: '#000', fontSize: 16}}>{user.fullname}</Text>
          <Text>{user.email}</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 38, marginTop: 30}}>
        <Text style={{fontSize: 14}}>Chung</Text>
        <View style={ProfileStyle.lineLight} />
        <View style={{gap: 20}}>
          <Pressable onPress={() => pressEditProfile()}>
            <Text style={{fontSize: 16, color: '#000'}}>
              Chỉnh sửa thông tin
            </Text>
          </Pressable>
          <Text style={{fontSize: 16, color: '#000'}}>Cẩm nang cây trồng</Text>
          <Text style={{fontSize: 16, color: '#000'}}>Lịch sử giao dịch</Text>
          <Text style={{fontSize: 16, color: '#000'}}>Q & A</Text>
        </View>
      </View>

      <View style={{marginHorizontal: 38, marginTop: 30}}>
        <Text style={{fontSize: 14}}>Bảo mật và điều khoản</Text>
        <View style={ProfileStyle.lineLight} />
        <View style={{gap: 20}}>
          <Text style={{fontSize: 16, color: '#000'}}>
            Điều khoản và điều kiện
          </Text>

          <Text style={{fontSize: 16, color: '#000'}}>
            Chính sách quyền riêng tư
          </Text>
          <Pressable onPress={() => pressLogout()}>
            <Text style={{fontSize: 16, color: 'red'}}>Đăng xuất</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Profile;
