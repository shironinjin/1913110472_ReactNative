import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const FirstPage = ({ navigation }) => {
  const [postText, setPostText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>Please Insert name to pass it to Second screen</Text>
      <TextInput
        style={{
          width: 200,
          padding: 10,
          margin: 8,
          backgroundColor: 'gainsboro',
        }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Go Next"
        onPress={() => {
          navigation.navigate("Second", { post: postText });
        }}
      />
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },

  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
