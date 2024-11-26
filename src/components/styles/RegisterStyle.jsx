import { StyleSheet } from "react-native";

const RegisterStyle = StyleSheet.create({
    img: {
        height: 225,
        width: 412,
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
        marginTop: 10,

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
    greenText: {
        color: '#009245',
        fontWeight: 'medium'
    },
})
export default RegisterStyle;