import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import LoginStyle from '../styles/LoginStyle';
import CustomButton from '../styles/CustomButton';
import CustomText from '../styles/CustomText';
import {login} from '../../rtk/API';

const Login = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFormValid, setFormValid] = useState(false); // Moved this to the top level

  const dispatch = useDispatch();

  const pressRegister = () => {
    navigation.navigate('Register');
  };

  const pressLogin = () => {
    if (email === '' || password === '') {
      return ToastAndroid.show('Không được bỏ trống', ToastAndroid.SHORT);
    }
    // if(emailRegex.test(email)) {
    //   return ToastAndroid.show("Email không hợp lệ", ToastAndroid.SHORT);
    // }
    dispatch(login({email: email, password: password}))
      .unwrap()
      .then(() => {
        ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
      })
      .catch(error => {
        ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
      });
    // navigation.navigate('AppNavigation', {Screen: 'HomeScreen'});
  };

  return (
    <View>
      <Image
        source={require('../assets/images/image_login.png')}
        style={LoginStyle.img}
      />
      <View style={LoginStyle.wrapper}>
        <Text style={LoginStyle.header}>Chào mừng bạn</Text>
        <Text style={LoginStyle.title}>Đăng nhập tài khoản</Text>
      </View>
      <TextInput
        style={[LoginStyle.input, {marginHorizontal: 20, marginTop: 20}]}
        placeholder="Nhập email hoặc số điện thoại"
        placeholderTextColor={'#8B8B8B'}
        value={email}
        onChangeText={setEmail}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={[LoginStyle.input, {marginHorizontal: 20, marginTop: 10}]}
          placeholder="Mật khẩu"
          placeholderTextColor={'#8B8B8B'}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={LoginStyle.toggleButton}
          onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="#828282"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Text>Nhớ tài khoản</Text>
        <Text style={LoginStyle.greenText}>Forget password?</Text>
      </View>
      <TouchableOpacity
        style={[CustomButton.button, {marginLeft: 20, marginTop: 10}]}
        onPress={() => pressLogin()}>
        <Text style={CustomButton.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 35,
          marginHorizontal: 20,
        }}>
        <Image
          source={require('../assets/images/line.png')}
          style={{width: 150}}
        />
        <View style={{marginTop: -12}}>
          <Text style={{fontSize: 15, fontWeight: 'medium', color: 'black'}}>
            {' '}
            Hoặc{' '}
          </Text>
        </View>
        <Image
          source={require('../assets/images/line.png')}
          style={{width: 150}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          marginTop: -10,
        }}>
        <Image
          source={require('../assets/images/logo_google.png')}
          style={{width: 36, height: 36}}
        />
        <Image
          source={require('../assets/images/logo_facebook.png')}
          style={{width: 35, height: 35}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 5,
          margin: 25,
        }}>
        <Text style={CustomText.blackText}>Bạn không có tài khoản</Text>
        <Pressable onPress={() => pressRegister()}>
          <Text style={CustomText.greenText}>Tạo tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
