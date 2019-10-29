import { StyleSheet, } from 'react-native';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: "black",
        padding: 20,
    },
    header: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    items: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    img: {
        width: 100,
        height: 100
    },
    size: {
        fontSize: 20,
    },
    txtInput: {
        borderRadius: 10,
        height: 50,
        marginLeft: 10,
        fontSize: 30,
        paddingRight: 10
    },
    flatList: {
        marginTop: 20,
        flex: 1, borderWidth: 1,
        padding: 20,
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 20
    },
    btnGreen: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "green",
        marginLeft: 10
    },
    btnBlue: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "blue",
        marginLeft: 10
    },
    btnRed: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "red",
        marginLeft: 10
    },
});
export default Styles;