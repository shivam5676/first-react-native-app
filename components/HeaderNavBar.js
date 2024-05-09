import { View, Text, StyleSheet, Modal } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HeaderNavBar = () => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <>
      {/* <Modal
        statusBarTranslucent={true}
        style={{
          height: "100%",
          backgroundColor: "black",
          marginTop: statusBarHeight,
        }}
      >
        <Text>ghgghgf</Text>
      </Modal> */}
      <View style={[styles.navContainer, { marginTop: statusBarHeight }]}>
        <Text style={[styles.title, { marginHorizontal: 10 }]}>FunkyMood</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Ionicons
            name="notifications"
            size={25}
            color="#ffffff"
            style={{ marginHorizontal: 10 }}
          />
          <MaterialCommunityIcons
            name="message-reply-text"
            size={28}
            color="#ffffff"
            style={{ marginHorizontal: 15 }}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9b59b6",
    borderBottomColor: "#ffb61e",
    borderBottomWidth: 2,
  },
  title: {
    color: "#ffffff",
    fontStyle: "italic", //cursive like text
    // fontFamily:"cursive",
    fontWeight: "900",
    fontSize: 28,
  },
});

export default HeaderNavBar;
