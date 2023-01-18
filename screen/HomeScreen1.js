import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="md-home" size={30} color="#8fbc8f" />
      <Text style={{margin:4}}>Home Screen</Text>
      {/* <Button
        title="เกี่ยวกับเรา"
        onPress={() =>
          navigation.navigate("About", {
            email: "reactnative@tni.ac.th",
          })
        }
      /> */}
    </View>
  );
};

export default HomeScreen1;
