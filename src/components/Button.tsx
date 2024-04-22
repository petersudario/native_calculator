import React from 'react';
import Styles from './Styles'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({});

export default props => {
    const stylesButton = [Styles.button]
    if (props.double) stylesButton.push(Styles.buttonDouble)
    if (props.triple) stylesButton.push(Styles.buttonTriple)
    if (props.operation) stylesButton.push(Styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}