import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../styles/commonStyles'
import colors from '../styles/colors'

const UseTimer = () => {
  return (
      <Text style={styles.timer}>00:30</Text>
  )
}

export default UseTimer

const styles = StyleSheet.create({
    timer:{
        ...commonStyles.fontBold15,
        color:colors._020202
      },
})