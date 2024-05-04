import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import mishraFunny from "../assets/icon.png";
const Members = () => {
  return (
    <View>
      <Text style={styles.textHeading}>Our Team </Text>
      <View style={styles.memberCard}>
        <Image style={styles.imageContainer} source={mishraFunny}></Image>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Member name</Text>
          <Text style={styles.memberPosition}>member position will go here</Text>
        </View>
      </View><View style={styles.memberCard}>
        <Image style={styles.imageContainer} source={mishraFunny}></Image>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Member name</Text>
          <Text style={styles.memberPosition}>member position will go here</Text>
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
  memberCard: {
    width: "100%",
    paddingBottom: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  memberCard: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 5,
  },
  memberInfo: {
    color: "white",
    padding: 10,
  },
  memberName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  memberPosition: {
    color: "white",
  },
});

export default Members;
