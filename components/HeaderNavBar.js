import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
const HeaderNavBar = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.title}>HeaderNavBar</Text>
      <Ionicons name="notifications" size={30} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    // borderColor: "red",
  },
  title: {
    color: "goldenrod",
    fontStyle: "italic", //cursive like text
    // fontFamily:"cursive",
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default HeaderNavBar;
