import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Count = ({num,title}) => {
    //const {num,title}= props;
  const [count, setCount] = useState(num); //กำหนดค่า เปลี่ยนค่า

//   /*useEffect(() => {console.log('use effect1') }); //ไม่นิยมใช้*/

//   useEffect(() => { console.log('use effect2')},[count]);

//   useEffect(() => { console.log('use effect3') },[]);

  return (
    <View>
      <Text>{title}:{count}</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Count;
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
});*/
