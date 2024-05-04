import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.textHeading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
        <Text style={styles.Card}>dd</Text>
      </ScrollView>
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
  Card: {
    backgroundColor: "#F8F8F8",
    height: 100,
    width: 140,
    marginRight: 5,borderRadius:10
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "scroll",
  },
});

export default ElevatedCards;
