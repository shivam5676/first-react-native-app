import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { FontAwesome6 } from "@expo/vector-icons";
const FooterNavBar = () => {
  return (
    <View style={styles.navContainer}>
      {/* <View></View> */}
      <FontAwesome name="home" size={35} color="white" />
      <MaterialIcons name="person-add-alt-1" size={35} color="white" />
      <View style={styles.redCircle}>
        <MaterialIcons name="sms" size={40} color="#8e44ad" />
      </View>
      <FontAwesome6 name="heart-circle-check" size={35} color="white" />
      <MaterialCommunityIcons
        name="shield-account"
        size={35}
        color="white"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
    // position: "absolute", //i want to make this at the bottom
    // bottom:0
    justifyContent: "space-evenly",
    alignItems:"center",
    borderTopWidth: 2,
    borderColor: "#ffb61e",
    backgroundColor:"#8e44ad"
  },
  redCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: 70,
    width: 70,
    backgroundColor: "white",

    position: "relative",
    bottom: 20,
    borderRadius: 35,
    borderTopWidth: 2,
    borderColor: "#ffb61e",
    borderLeftWidth: 2,
  },
});

export default FooterNavBar;
