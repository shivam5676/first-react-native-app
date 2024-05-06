import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const StatusCards = () => {
  return (
    <View>
      {/* <Text style={styles.textHeading}>Status</Text> */}
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View style={styles.outerMessageBox}>
          <Text style={styles.Card}>Testing</Text>
        </View>
        <View style={styles.outerMessageBox}>
          <Text style={styles.Card}>Testing</Text>
        </View>
        <View style={styles.outerMessageBox}>
          <Text style={styles.Card}>Testing</Text>
        </View>
        <View style={styles.outerMessageBox}>
          <Text style={styles.Card}>Testing</Text>
        </View>
        <View style={styles.outerMessageBox}>
          <Text style={styles.Card}>Testing</Text>
        </View>
        <View style={styles.outerMessageBox}>
          <Text style={styles.Card}>Testing</Text>
        </View>
  
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textHeading: {
    color: "white",
    fontWeight: "900",
    fontSize: 22,
    paddingVertical: 10,
  },
  outerMessageBox: {
    borderStyle: "solid",
    borderColor: "gray",
    marginRight: 7,
    borderWidth: 1,
    borderRadius:25
  },
  Card: {
    backgroundColor: "#D3D3D3",
    height: 60,
    width: 60,
    margin: 5,
    borderRadius: 50,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "scroll",
    marginTop:2
  },
});

export default StatusCards;
