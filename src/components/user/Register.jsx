import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import RegisterStyle from '../styles/RegisterStyle';
import CustomButton from '../styles/CustomButton';
import CustomText from '../styles/CustomText';
import {register} from '../../rtk/API';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [hoTen, setHoTen] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const pressRegister = () => {
    if (
      hoTen === '' ||
      email === '' ||
      password === '' ||
      phone === '' ||
      address === ''
    ) {
      return ToastAndroid.show('Không được bỏ trống', ToastAndroid.SHORT);
    }
    dispatch(
      register({
        hoTen,
        email,
        password,
        phone,
        address,
      }),
    )
      .unwrap()
      .then(() => {
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
        navigation.navigate('Login');
      })
      .catch(error => {
        ToastAndroid.show(
          'Đăng ký thất bại: ' + error.message,
          ToastAndroid.SHORT,
        );
      });
  };

  const pressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Image
        source={require('../assets/images/image_register.png')}
        style={RegisterStyle.img}
      />
      <View style={RegisterStyle.wrapper}>
        <Text style={RegisterStyle.header}>Đăng ký</Text>
        <Text style={RegisterStyle.title}>Tạo tài khoản</Text>
      </View>
      <TextInput
        style={[RegisterStyle.input, {marginHorizontal: 20, marginTop: 20}]}
        placeholder="Họ tên"
        placeholderTextColor={'#8B8B8B'}
        value={hoTen}
        onChangeText={setHoTen}
      />
      <TextInput
        style={[RegisterStyle.input, {marginHorizontal: 20, marginTop: 10}]}
        placeholder="Email"
        placeholderTextColor={'#8B8B8B'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[RegisterStyle.input, {marginHorizontal: 20, marginTop: 10}]}
        placeholder="Mật khẩu"
        placeholderTextColor={'#8B8B8B'}
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={[RegisterStyle.input, {marginHorizontal: 20, marginTop: 10}]}
        placeholder="Nhập số điện thoại"
        placeholderTextColor={'#8B8B8B'}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={[RegisterStyle.input, {marginHorizontal: 20, marginTop: 10}]}
        placeholder="Nhập địa chỉ"
        placeholderTextColor={'#8B8B8B'}
        value={address}
        onChangeText={setAddress}
      />

      <View
        style={{
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            paddingHorizontal: 20,
          }}>
          Để đăng ký tài khoản, bạn đồng ý{' '}
          <Text
            style={[
              RegisterStyle.greenText,
              {textDecorationLine: 'underline'},
            ]}>
            Terms & Conditions and Privacy Policy
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={pressRegister}
        style={[CustomButton.button, {marginLeft: 20, marginTop: 10}]}>
        <Text style={CustomButton.buttonText}>Đăng ký</Text>
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
        <Text style={CustomText.blackText}>Tôi đã có tài khoản</Text>
        <Pressable onPress={pressLogin}>
          <Text style={CustomText.greenText}>Đăng nhập</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
