import {StyleSheet} from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerInfo: {
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 30,
    marginTop: 20,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#000',
  },
  img: {
    width: 54,
    height: 54,
    borderRadius: 50,
  },
  lineLight: {
    height: 1,
    backgroundColor: '#ABABAB',
    marginVertical: 5,
  },
});
export default ProfileStyle;
