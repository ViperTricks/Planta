import {StyleSheet} from 'react-native';
const CartStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  conatainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 30,
    textTransform: 'uppercase',
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    borderRadius: 6,
    backgroundColor: '#007537',
    alignItems: 'center',
    marginBottom: 20,
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  tamtinh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  total: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});
export default CartStyle;
