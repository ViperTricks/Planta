import {StyleSheet} from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'medium',
  },
  img: {
    width: 'auto',
    height: 225,
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  containerWrap: {
    width: 370,
    height: 134,
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginBottom: 20,
  },
  imgOther: {
    width: 108,
    height: 134,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerWrapContent: {
    width: 217,
    height: 134,
  },
  titleName: {
    color: '#221F1F',
    fontSize: 18,
    fontWeight: 'medium',
  },
  content: {
    fontSize: 16,
  },
});
export default HomeScreenStyle;
