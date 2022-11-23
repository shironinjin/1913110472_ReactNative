import { View, Text } from 'react-native'
import React from 'react'


const Cus =(props)=>{
    const {fn,ln} = props;
    return(
      <View style ={{alignItems:"center"}}>
        <Text style ={{color:'blue',fontSize:20}}>Your First name is : {fn} and Last name is : {ln} </Text>
      </View>
    )
  }





const MyCustomTextWith = () => {
  return (
    <View>
      <Cus fn='Jiraporn' 
      ln='Tubchum'  
      />
       <Cus fn='Kanjannachai' 
      ln='Yaowarat'  
      />
      
    </View>
  )
}

export default MyCustomTextWith