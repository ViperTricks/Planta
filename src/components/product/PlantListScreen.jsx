import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../styles/CustomHeader';
import ItemCate from '../../../assets/components/ItemCate';
import db from '../db.json';
import formatPrice from '../utils/formatPrice';
import ItemProduct from '../assets/items/ItemProduct';

const imageMapping = {
  spider_plant: require('../assets/images/spider_plant.png'),
  song_of_India: require('../assets/images/song_of_India.png'),
  pink_anthurium: require('../assets/images/pink_anthurium.png'),
  black_love_anthurium: require('../assets/images/black_love_anthurium.png'),
  grey_star_calarthe: require('../assets/images/grey_star_calarthe.png'),
  banana_plant: require('../assets/images/banana_plant.png'),
  zz_plant: require('../assets/images/zz_plant.png'),
  palm: require('../assets/images/palm.png'),
  devils_ivy: require('../assets/images/devils_ivy.png'),
  sago_palm: require('../assets/images/sago_palm.png'),
};

const PlantListScreen = props => {
  const {navigation} = props;
  const pressBackToHomeScreen = () => {
    navigation.navigate('BottomTabNavigation');
  };
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [filteredData, setFilteredData] = useState(db.listItem);

  const dataCate = [
    {
      id: 1,
      name: 'Tất cả',
    },
    {
      id: 2,
      name: 'Hàng mới về',
    },
    {
      id: 3,
      name: 'Ưa sáng',
    },
    {
      id: 4,
      name: 'Ưa bóng',
    },
  ];

  useEffect(() => {
    filterData();
  }, [selectedCategory]);

  const filterData = () => {
    if (selectedCategory === 'Tất cả') {
      setFilteredData(db.listItem);
    } else if (selectedCategory === 'Hàng mới về') {
      setFilteredData(
        db.listItem.filter(item =>
          [
            'spider_plant',
            'song_of_India',
            'pink_anthurium',
            'black_love_anthurium',
            'grey_star_calarthe',
            // 'banana_plant'
          ].includes(item.img),
        ),
      );
    } else {
      setFilteredData(
        db.listItem.filter(item => item.preference === selectedCategory),
      );
    }
  };

  const sections = [
    {
      data: filteredData.map(item => ({
        ...item,
        img: imageMapping[item.img],
      })),
      renderItem: ({item}) => (
        <ItemProduct dataProduct={item} formatPrice={formatPrice} />
      ),
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={
        <View style={CustomHeader.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => pressBackToHomeScreen()}>
              <Image source={require('../assets/images/back_screen.png')} />
            </TouchableOpacity>
            <Text style={CustomHeader.title}>Cây trồng</Text>
            <Image source={require('../assets/images/cart.png')} />
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataCate}
            renderItem={({item}) => (
              <ItemCate
                dataCate={item}
                isSelected={item.name === selectedCategory}
                onPress={() => setSelectedCategory(item.name)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      }
      data={sections}
      renderItem={({item}) => (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={item.data}
          renderItem={item.renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2} // Display items in 2 columns

        />
      )}
    />
  );
};

export default PlantListScreen;

const styles = StyleSheet.create({});
