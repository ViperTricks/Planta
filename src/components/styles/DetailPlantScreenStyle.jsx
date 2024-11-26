import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const DetailPlantScreenStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  conatainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conatainerPlantAndPreference: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 50,
    marginTop: 20,
  },
  containerWrapImg: {
    marginTop: 20,
    width: screenWidth,
    height: 270,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 30,
    color: '#000',
  },
  img: {
    width: screenWidth * 0.8, // 80% of screen width for the image
    height: 270,
  },

  navigationContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    top: '50%',
    paddingHorizontal: 20,
  },
  arrow: {
    width: 34, // Increased width to make space for centering text
    height: 34, // Increased height to make space for centering text
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  // arrowText: {
  //   color: '#000000',
  //   fontSize: 18, // Increased font size for better visibility
  // },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: 'black',
  },
  paginationDotInactive: {
    backgroundColor: 'grey',
  },

  text: {
    color: '#ffff',
    fontSize: 14,
  },
  viewBox: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#009245',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginHorizontal: 30,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
  stock: {
    color: 'green',
  },
  lineLight: {
    height: 1,
    backgroundColor: '#ABABAB',
    marginVertical: 5,
    marginHorizontal: 30,
  },
  lineBold: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 5,
    marginHorizontal: 30,
  },
});

export default DetailPlantScreenStyle;
