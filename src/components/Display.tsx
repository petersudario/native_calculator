import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import Styles from '../components/Styles'
import { Text } from 'react-native'

export default props =>
<View style={Styles.display}>
    <Text style={Styles.displayValue} numberOfLines={1}>{ props.value }</Text>
</View>

