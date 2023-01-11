import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import First from "./page/First";
import Second from "./page/Second";
import Third from "./page/Third";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./screen/FirstPage";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      {/*       <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
}
function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="toggle Drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#8fbc8f'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
     }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="First Page" component={MyStack1} />
      <Drawer.Screen name="Second Page" component={MyStack2} />
    </Drawer.Navigator>
  );
}

function MyStack1() {
  return (
    <Stack.Navigator
      initialRouteName="First Page"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="First Page" component={First} />
    </Stack.Navigator>
  );
}

function MyStack2() {
  return (
    <Stack.Navigator
      initialRouteName="Second Page"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Second Page" component={Second} />
      <Stack.Screen name="Third Page" component={Third} />
    </Stack.Navigator>
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
