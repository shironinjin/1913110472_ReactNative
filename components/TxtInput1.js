import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const TxtInput1 = () => {
  const [userName, setUserName] = useState("");

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text>Insert any text in below input</Text>
        <TextInput
        value={userName} onChangeText ={(userName)=>{setUserName(userName)}} 
        placeholder ={'Username'} style= {styles.input}
        />
        <Text style = {{color:'blue'}}>{userName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TxtInput1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
  },

  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
});
