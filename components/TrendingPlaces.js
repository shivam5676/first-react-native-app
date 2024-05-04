import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import jaipurbg from "../assets/jaipurbg.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const TrendingPlaces = () => {
  const [liked, setliked] = useState(false);
  return (
    <View>
      <Text style={styles.textHeading}>Trending Places</Text>
      <View style={styles.placeCard}>
        <Image
          style={styles.placeImage}
          source={jaipurbg}
          resizeMode="cover"
        ></Image>
        <View style={styles.placeContainer}>
          <Text style={styles.placeTitle}>hawa mahal, jaipur</Text>
          <View style={styles.bottomDetails}>
            <Text style={styles.placeTime}>12 min ago</Text>
            <MaterialCommunityIcons
              name={!liked?"cards-heart-outline":"cards-heart"}
              size={24}
              color={!liked?"black":"red"}
            
              onPress={() => {
                setliked(!liked);
              }}
            />
          </View>
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
    backgroundColor: "white",
    borderRadius: 10,
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
  bottomDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  placeTime: {
    fontSize: 15,
  },
});

export default TrendingPlaces;
