import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const PeopleMayYouLike = () => {
  return (
    <View>
      <Text style={styles.textHeading}>People May You Like</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <Text style={styles.Card}>Testing</Text>
        <Text style={styles.Card}>Testing 1</Text>
        <Text style={styles.Card}>Testing 2</Text>
        <Text style={styles.Card}>Testing 3</Text>
        <Text style={styles.Card}>Testing 4</Text>
    
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
  Card: {
    backgroundColor: "#D3D3D3",
    height: 100,
    width: 140,
    marginRight: 5,
    borderRadius: 10,
    textAlignVertical:"center",
    textAlign:"center",fontSize:15,fontWeight:"bold"
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "scroll",
  },
});

export default PeopleMayYouLike;
