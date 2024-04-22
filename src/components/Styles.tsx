import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
 } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button : {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
    display: {
        flex: 0.7,
        backgroundColor: '#0C0C0C',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    },


});
