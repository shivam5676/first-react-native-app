import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Members = () => {
  return (
    <View>
      <Text style={styles.textHeading}>Our Team </Text>
      <View style={styles.memberCard}>
        <Image style={styles.imageContainer} source={'../assets/icon.png'}></Image>
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
  },
});

export default Members;
