import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FlatList = () => {
  return (
    <View>
      <Text style={styles.textHeading}>Flat Cards</Text>
      <View style={styles.flatContainer}>
        <Text style={styles.redCard}>Red</Text>
        <Text style={styles.yellowCard}>Red</Text>
        <Text style={styles.redCard}>Red</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textHeading: {
    color: "white",
    fontWeight: "900",
    fontSize: 25,
    paddingVertical: 10,
  },
  flatContainer: {
    flexDirection: "row",
  },
  redCard: {
    backgroundColor: "red",
    height: 100,
    // width: 120,
    flex:1,
    marginRight: 5,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  yellowCard: {
    backgroundColor: "gold",
    height: 100,
    // width: 120,
    flex:1,
    marginRight: 5,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default FlatList;
