import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const HeaderNavBar = () => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={[styles.navContainer,{marginTop:statusBarHeight}]}>
      <Text style={styles.title}>FunkyMood</Text>
      <Ionicons name="notifications" size={25} color="#ffffff" />
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"#9b59b6",
    borderBottomColor:"#ffb61e",
    borderBottomWidth:2
  
  },
  title: {
    color: "#ffffff",
    fontStyle: "italic", //cursive like text
    // fontFamily:"cursive",
    fontWeight:"900",
    fontSize: 28,
  },
});

export default HeaderNavBar;
