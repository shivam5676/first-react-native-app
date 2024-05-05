import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const StatusCards = () => {
  return (
    <View>
      <Text style={styles.textHeading}>Status</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View style={styles.outerMessageBox}><Text style={styles.Card}>Testing</Text></View>
        <View style={styles.outerMessageBox}><Text style={styles.Card}>Testing</Text></View>
        <View style={styles.outerMessageBox}><Text style={styles.Card}>Testing</Text></View>
        <View style={styles.outerMessageBox}><Text style={styles.Card}>Testing</Text></View>
        <View style={styles.outerMessageBox}><Text style={styles.Card}>Testing</Text></View>

        {/* <Text style={styles.Card}>Testing 1</Text>
        <Text style={styles.Card}>Testing 2</Text>
        <Text style={styles.Card}>Testing 3</Text>
        <Text style={styles.Card}>Testing 4</Text> */}
    
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
  outerMessageBox:{
    borderStyle:"solid",
    borderColor:"gray",
  marginRight:7,
    borderWidth:2,
  },
  Card: {
    backgroundColor: "#D3D3D3",
    height: 80,
    width: 80,
    // marginRight: 5,
    margin:10,
    borderRadius: 50,
    textAlignVertical:"center",
    textAlign:"center",fontSize:15,fontWeight:"bold"
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "scroll",
  },
});

export default StatusCards;
