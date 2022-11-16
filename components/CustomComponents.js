import { View, Text } from 'react-native'
import React from 'react'

const Cat = ()=>{
    return(
        <View>
            <Text>I am also a cat!</Text>
        </View>
    );
};
const CustomComponents = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </View>
  )
}

export default CustomComponents