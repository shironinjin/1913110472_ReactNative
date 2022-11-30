import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import Information from './components/Information'
// import Welcome from './components/Welcome';
// import Practice1_StyleSheet from './components/Practice1_StyleSheet';
// import TxtInput from './components/TxtInput';
// import CustomComponents from './components/CustomComponents';
// import Logo from './components/Logo';
// import LotsOfGreeting from './components/LotsOfGreeting';
// import MyCustomTextWith from './components/MyCustomTextWith';
// import Count from './components/Count';
// import TxtInput1 from './components/TxtInput1';
// import Users from './components/Users';
import UserNamePassword from "./components/UserNamePassword";

const App = () => {
  return (
    <View>
      <UserNamePassword />
      {/* <Information/>*/}
      {/* <Welcome/>*/}
      {/*<Practice1_StyleSheet/>*/}
      {/*<TxtInput/>*/}
      {/*<CustomComponents/>*/}
      {/*} <Logo/>   */}
      {/* <Users/>   */}
      {/*<LotsOfGreeting/>*/}
      {/*<MyCustomTextWith/>*/}
      {/* <TxtInput1/>*/}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
