import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    img: {
        height: 360,
        width: 415,
    },
    header: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: '450',
    },
    wrapper: {
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 46,
        borderWidth: 1,
        borderColor: '#8B8B8B',
        borderRadius: 10,
        paddingLeft: 15,
    },
    toggleButton: {
        marginLeft: -55,
        marginTop: 10,
        color: '#1a1a1a',
    },
    greenText: {
        color: '#009245',
        fontWeight: 'medium'
    },

})
export default LoginStyle;