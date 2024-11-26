import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../styles/CustomHeader';

const SearchScreen = props => {
  const {navigation} = props;
  const pressBackToHomeScreen = () => {
    clearSearch();
    navigation.navigate('Home');
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearSearch();
    });

    return unsubscribe;
  }, [navigation]);
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Implement your search logic here
    // For this example, we'll use a mock result
    setSearchResults([
      {
        id: '1',
        name: 'Panse Den | Hybrid',
        price: '250.000đ',
        quantity: 'Còn 156 sp',
        image: require('../assets/images/spider_plant.png'),
      },
    ]);
  };

  const renderItem = ({item}) => (
    <View style={styles.resultItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productQuantity}>{item.quantity}</Text>
      </View>
    </View>
  );
  return (
    <View style={CustomHeader.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => pressBackToHomeScreen()}>
          <Image source={require('../assets/images/back_screen.png')} />
        </TouchableOpacity>
        <Text style={CustomHeader.title}>Tìm kiếm</Text>
        <View></View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  resultItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productQuantity: {
    fontSize: 12,
    color: '#888',
  },
});
