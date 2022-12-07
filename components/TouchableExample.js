import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const TouchableExample = () => {
  const onPress = (msg) => {
    alert("Alert for: " + msg);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <TouchableHighlight
          style={styles.button}
          onPress={() => onPress("TouchableHighlight Pressed")}>
          <Text>Touchable Hightlight</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress("TouchableOpacity Pressed")}>
            <Text>Touchable OPacity</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default TouchableExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD", //color of button
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
