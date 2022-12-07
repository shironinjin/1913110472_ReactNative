import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert("hello");
  };

  const twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      "Hello",
      //body
      "I am two option alert. do you want to cancel me?",
      [
        {
          text: "yes", //ปุ่ม
          onPress: () => alert("yes Pressed"),
        },
        {
          text: "no", //ปุ่ม
          onPress: () => alert("no Pressed"),
        },
      ],
      //clicking out side of alert will not cancel ไม่ให้กดพื้นที่ว่าง
      { cancelable: false }
    );
  };
  return (
    //ส่วนทีี่แสดงใน ทร ของเรา
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Button title="Simple Alert" onPress={simpleAlertHandler} />

        <Button
          title="Alert with two Options" onPress={twoOptionAlertHandler} />
          
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
