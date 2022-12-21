import { Text, View, SafeAreaView, Button } from "react-native";
import React from "react";
import style1 from "../components/style1";

const Third = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style1.container}>
        <Text style={style1.textTopStyle}>This is the Third Page</Text>
        <Button
          title="Go TO First Page "
          onPress={() => {
            navigation.navigate("First Page");
          }}
        />
        <Button
          title="Go TO Second Page "
          onPress={() => {
            navigation.navigate("Second Page");
          }}
        />
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={style1.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Third;
