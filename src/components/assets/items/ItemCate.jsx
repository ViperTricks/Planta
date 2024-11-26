import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemCate = ({dataCate, isSelected, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.categoryButton,
          isSelected && styles.selectedCategoryButton,
        ]}
        onPress={onPress}>
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.selectedCategoryText,
          ]}>
          {dataCate.name}
        </Text>
        <View style={{gap: 20}}></View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCate;

const styles = StyleSheet.create({
  container: {
    marginLeft: -18,
  },
  categoryButton: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    marginTop: 25,
    marginHorizontal: 18,
    borderRadius: 6,
    borderColor: '#FFFFFF',
  },
  selectedCategoryButton: {
    backgroundColor: 'green',
  },
  categoryText: {
    fontSize: 15,
    color: '#7D7B7B',
  },
  selectedCategoryText: {
    fontSize: 15,
    color: 'white',
  },
});
