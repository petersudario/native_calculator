import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import Styles from '../components/Styles'

export default function AppLayout({ children }) {
  return (
    <View style={Styles.container}>
      {children}
    </View>
  )
}
