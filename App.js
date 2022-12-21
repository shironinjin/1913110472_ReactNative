import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import HomePost from "./screen/HomePost";
import CreatePost from "./screen/CreatePost";
import FirstPage from "./screen/FirstPage";
import SecondPage from "./screen/SecondPage";
import First from "./page/First";
import Second from "./page/Second";
import Third from "./page/Third";

/* function HomeScreen({Navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="เกี่ยวกับเรา" onPress={()=> Navigation.navigete('About')}/>
    </View>
  );
}
function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home"
       screenOptions={{
        headerStyle:{
          backgroundColor:'#8fbc8f'
        },
        headerTitColor:'#f0fff0',
        headerTitleStyle:{
          fontWeight:'bold'
        }
       }}
       >
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomePost} />
        <Stack.Screen name="Create" component={CreatePost} />
 */}

{/* <Stack.Screen name="First" component={FirstPage} />
<Stack.Screen name="Second" component={SecondPage} /> */}

<Stack.Screen name="First Page" component={First} />
<Stack.Screen name="Second Page" component={Second} />
<Stack.Screen name="Third Page" component={Third} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
