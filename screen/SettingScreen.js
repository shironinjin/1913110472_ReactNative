import { View, Text ,Button} from 'react-native'
import React from 'react'
import style1 from "../components/style1";

const SettingScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={style1.textTopStyle}>Settings!</Text>
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  )
}

export default SettingScreen