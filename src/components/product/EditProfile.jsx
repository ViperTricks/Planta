import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile } from '../../rtk/API';

const EditProfile = props => {
  const { navigation } = props;
  const user = useSelector(state => state.app.user);
  const [fullname, setFullname] = useState(user.fullname || '');
  const [address, setAddress] = useState(user.address || '');
  const [phone, setPhone] = useState(user.phone || '');
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      editProfile({
        email: user.email,
        fullname: fullname,
        address: address,
        phone: phone,
      })
    ).unwrap().then(() => {
      Alert.alert('Success', 'Profile updated successfully');
      navigation.navigate('Profile');
    }).catch(error => {
      Alert.alert('Error', 'Failed to update profile');
      console.error(error);
    });
  };

  const pressBack = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={pressBack}>
          <Image source={require('../assets/images/back_screen.png')} />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../assets/images/palm.png')} />
        <View></View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Thông tin sẽ được lưu cho lần kế tiếp.</Text>
        <Text style={styles.text}>Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullname}
          onChangeText={text => setFullname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TouchableOpacity style={styles.saveProfile} onPress={handleEdit}>
          <Text style={styles.saveButtonText}>LƯU THÔNG TIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    width: 350,
    height: 46,
    borderRadius: 10,
    borderColor: '#7D7B7B',
    color: '#7D7B7B',
    padding: 10,
    fontSize: 16,
  },
  text: {
    color: 'black',
    fontSize: 14,
    marginBottom: 10,
  },
  saveProfile: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 300,
    height: 50,
    backgroundColor: '#007537',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditProfile;
