import { View, Text, Button } from "react-native";
import React from "react";

import HomeScreen2 from "./screen/HomeScreen2";
import ProductScreen from "./screen/ProductScreen";
import DetailScreen from "./screen/DetailScreen";

import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
 } from "@react-navigation/drawer";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// function Homescreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Go to Notifications" />
//     </View>
//   );
// }


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}
const Stack = createNativeStackNavigator();

function ProductStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ffb6c1",
      },headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      <Stack.Screen name="Product" component={ProductScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8fbc8f",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "tomato",
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      
    >
      <Drawer.Screen name="Home" component={HomeScreen2} />
      <Drawer.Screen name="Product" component={ProductStack} />
      {/* <Drawer.Screen name="Close Drawer" component={CustomDrawerContent} /> */}
      
    </Drawer.Navigator>
  );
}



const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
