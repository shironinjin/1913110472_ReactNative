import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
    <Text>react native with thai-nichi</Text>
    <Text>By...jiraporn</Text>
    <Text>student id: 1913110472</Text>
    <Text>Major:IT </Text>
  </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#add8e6",
      alignItems:"center",
      justifyContent:'center',
      color:"red"
  
    },


  })