import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import SafeAreaView from 'react-native';
import AppLayout  from './Layouts/AppLayout';
import Styles from './components/Styles';
import Button from './components/Button';
import Display from './components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

export default class App extends React.Component {

    state = { ...initialState };

    clearDisplay = () => {
        this.setState({ ...initialState });
    };

    addDigit = n => {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay: false})

        if (n !== '.') {
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[this.state.current] = newValue;
            this.setState({ values });
        }
    };

    clearMemory = () => {
        this.setState({ ...initialState})
    };

    setOperation = operation => {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '=';
            const values = [...this.state.values];
            try {
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
            } catch (e) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            });
        }
    };

    render () {
        return (
            <React.Fragment>
                <AppLayout>
                    <Display value={ this.state.displayValue } />
                     <View style={Styles.buttons}>
                        <Button label="AC" triple onClick={this.clearMemory} />
                        <Button label="/" operation onClick={ this.setOperation } />
                        <Button label="7" onClick={ this.addDigit } />
                        <Button label="8" onClick={ this.addDigit } />
                        <Button label="9" onClick={ this.addDigit } />
                        <Button label="*" operation onClick={ this.setOperation } />
                        <Button label="4" onClick={ this.addDigit } />
                        <Button label="5" onClick={ this.addDigit } />
                        <Button label="6" onClick={ this.addDigit } />
                        <Button label="-" operation onClick={ this.setOperation } />
                        <Button label="1" onClick={ this.addDigit } />
                        <Button label="2" onClick={ this.addDigit } />
                        <Button label="3" onClick={ this.addDigit } />
                        <Button label="+" operation onClick={ this.setOperation } />
                        <Button label="0" double onClick={ this.addDigit } />
                        <Button label="." onClick={ this.addDigit } />
                        <Button label="=" operation onClick={ this.setOperation } />
                    </View>
                 </AppLayout>
            </React.Fragment>
        )
    }
}
