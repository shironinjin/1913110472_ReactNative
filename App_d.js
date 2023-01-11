import { View, Text, Button } from "react-native";
import React from "react";

import { 
  createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";



function Homescreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Notifications" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Home" component={Homescreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
