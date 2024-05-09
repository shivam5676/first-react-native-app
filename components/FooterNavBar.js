import { View, Text, StyleSheet, Modal, StatusBar } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome6 } from "@expo/vector-icons";

const FooterNavBar = () => {
  return (
    <View>
      {/* <View style={styles.navAction}></View> */}
      {/* <View style={styles.space}></View> */}
      <View style={styles.navContainer}>
        <FontAwesome name="home" size={35} color="white" />
        <MaterialIcons name="person-add-alt-1" size={35} color="white" />
        <View style={styles.centerCircle}>
          {/* <MaterialIcons name="sms" size={40} color="#8e44ad" /> */}
          <MaterialIcons name="add-box" size={40} color="#8e44ad" />
        </View>
        <FontAwesome6 name="heart-circle-check" size={35} color="white" />
        <MaterialCommunityIcons name="shield-account" size={35} color="white" />
      </View>

   
    </View>
  );
};
const styles = StyleSheet.create({
  navAction: {
    position: "absolute",
    bottom: 60,
    left: 0,
    width: "100%",
    backgroundColor: "white",
    zIndex: 4, // Ensure it's above other elements
  },
  space: {
    width: "100%",
    height: 20,
    backgroundColor: "transparent",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,

    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 3,
    borderColor: "#ffb61e",
    backgroundColor: "#8e44ad",
  },
  centerCircle: {
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
