import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import jaipurbg from "../assets/jaipurbg.jpg";
const TrendingPlaces = () => {
  return (
    <View>
      <Text style={styles.textHeading}>TrendingPlaces</Text>
      <View style={styles.placeCard}>
        <Image
          style={styles.placeImage}
          source={jaipurbg}
          resizeMode="cover"
        ></Image>
        <View style={styles.placeContainer}>
          <Text style={styles.placeTitle}>hawa mahal, jaipur</Text>
          <Text style={styles.placeTime}>12 min ago</Text>
        </View>
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
  placeCard: {
    // flex:1,
    width: "100%",
    color: "white",
    height: 300,
    backgroundColor: "white",borderRadius:10
  },
  placeImage: {
    height: 200,
    backgroundColor: "red",
    width: "100%",
  },
  placeContainer: {
    // height:"100%",
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
  },
  placeTitle: {
    fontSize: 20,
  },
  placeTime: {
    fontSize: 15,
  },
});

export default TrendingPlaces;
