
import { StyleSheet, } from 'react-native';
const style2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6E3CE',
        padding: 20,
    },
    header: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    leftHeader: {
        borderWidth: 1,
        borderRadius: 10,
        height: 100,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    btnHeader: {
        borderRadius: 10,
        width: 100,
        height: 65,
        borderWidth: 1,
        backgroundColor: "#088A85",
        marginLeft: 10
    },
    txtHeader: {
        fontSize: 70,
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    inBody: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'grey',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    aroundBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnBody1: {
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        width: 60,
        backgroundColor: '#F78181',
    },
    btnBody2: {
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        width: 60,
        backgroundColor: '#00BFFF',
    },
    txtBody: { alignItems: 'center' },
});
export default style2;