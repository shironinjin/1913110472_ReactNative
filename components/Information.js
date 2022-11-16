import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>react native with thai-nichi</Text>
    <Text style={{color:'blue',fontSize:15,fontWeight:'bold'}}>By...jiraporn</Text>
    <Text style={[styles.textStyle,styles.warning]}>student id: 1913110472</Text>
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
    textStyle:{
      fontSize:20,
    },
    warning:{
      fontWeight:'bold',
      color:'red',
    }


  })