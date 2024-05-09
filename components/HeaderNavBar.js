import { View, Text, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import InboxMessages from "./inboxMessages";
import Notifications from "./Notifications";
// const [openMessages,setOpenMessages]=useState(false)
const HeaderNavBar = () => {
  const statusBarHeight = Constants.statusBarHeight;
  const [inBoxOpen, setinboxOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  return (
    <>
      <StatusBar statusBarTranslucent={true}></StatusBar>
      {inBoxOpen && (
        <InboxMessages inBoxClose={() => setinboxOpen(false)}></InboxMessages>
      )}
      {notificationOpen && (
        <Notifications notificationClose={() => {
          setNotificationOpen(false)
        }}></Notifications>
      )}
      <View style={[styles.navContainer, { marginTop: statusBarHeight }]}>
        <Text style={[styles.title, { marginHorizontal: 10 }]}>FunkyMood</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Ionicons
            name="notifications"
            size={25}
            color="#ffffff"
            style={{ marginHorizontal: 10 }}
            onPress={() => {
              setNotificationOpen(true);
            }}
          />
          <MaterialCommunityIcons
            name="message-reply-text"
            size={28}
            color="#ffffff"
            style={{ marginHorizontal: 15 }}
            onPress={() => setinboxOpen(true)}
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