import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import androidapp from "../assets/android-app.jpg";
const BlogCards = () => {
  return (
    <View>
      <Text style={styles.textHeading}>Blog Cards</Text>
      <View style={styles.blogCard}>
        <Text style={styles.blogTitle}>What is Android App ?</Text>
        <Image style={styles.blogImage} source={androidapp}></Image>
        <View style={styles.blogAction}>
          <Text style={styles.textBtn}>view more</Text>
          <Text style={styles.textBtn}>read this</Text>
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

  blogCard: {
    width: "100%",

    height: 250,
    backgroundColor: "white",
    borderRadius:10,marginBottom:5
  },
  blogTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
paddingVertical:10,
    color: "black",
  },
  blogImage: {
    width: "100%",
    backgroundColor: "black",
    height: 160,
  },
  blogAction: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  textBtn: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default BlogCards;
