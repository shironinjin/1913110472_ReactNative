import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!userName.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!userEmail.trim()) {
      alert("Please Enter Email");
      return;
    }
    alert("Success");

    //Check for the Email TextInput
    //Checked Successfully
    //Do whatever you want
  };

  return (
    <View>
      <TextInput
        value={userName}
        onChangeText={(userName) => {
          setUserName(userName);
        }}
        placeholder={"Enter Name"}
        style={styles.textInputStyle}
      />
      <TextInput
        value={userEmail}
        onChangeText={(userEmail) => {
          setUserEmail(userEmail);
        }}
        placeholder={"Enter Email"}
        style={{ marginBottom: 15, ...styles.textInputStyle }}
      />

      <Button title="Submit" onPress={checkTextInput} color="gray" />
    </View>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 35,
  },

  textInputStyle: {
    width: "100%",

    height: 40,

    paddingHorizontal: 5,

    borderWidth: 0.5,

    marginTop: 15,
  },
});
