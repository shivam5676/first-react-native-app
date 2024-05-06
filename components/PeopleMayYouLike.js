import { View, Text, StyleSheet, ScrollView, Button, Image } from "react-native";
import React from "react";

const PeopleMayYouLike = () => {
  return (
    <View>
      <Text style={styles.textHeading}>People May You Like</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View style={styles.Card}>
          <Image style={styles.circlePic} alt="profile pic"></Image>
          <Text style={styles.usersName} numberOfLines={1} ellipsizeMode="tail">
            Shivam singh sa sdd
          </Text>
          <Button title="Add" color={"purple"}></Button>
        </View>
        <View style={styles.Card}>
          <Image style={styles.circlePic}></Image>
          <Text style={styles.usersName} numberOfLines={1} ellipsizeMode="tail">
            Shivam singh sa sdd
          </Text>
          <Button title="Add" color={"purple"}></Button>
        </View><View style={styles.Card}>
          <Image style={styles.circlePic}></Image>
          <Text style={styles.usersName} numberOfLines={1} ellipsizeMode="tail">
            Shivam singh sa sdd
          </Text>
          <Button title="Add" color={"purple"}></Button>
        </View><View style={styles.Card}>
          <Image style={styles.circlePic}></Image>
          <Text style={styles.usersName} numberOfLines={1} ellipsizeMode="tail">
            Shivam singh sa sdd
          </Text>
          <Button title="Add" color={"purple"}></Button>
        </View><View style={styles.Card}>
          <Image style={styles.circlePic}></Image>
          <Text style={styles.usersName} numberOfLines={1} ellipsizeMode="tail">
            Shivam singh sa sdd
          </Text>
          <Button title="Add" color={"purple"}></Button>
        </View><View style={styles.Card}>
          <Image style={styles.circlePic}></Image>
          <Text style={styles.usersName} numberOfLines={1} ellipsizeMode="tail">
            Shivam singh sa sdd
          </Text>
          <Button title="Add" color={"purple"}></Button>
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
  Card: {
    backgroundColor: "#D3D3D3",
    height: 130,
    width: 140,
    marginRight: 5,
    borderRadius: 10,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "scroll",
  },
  circlePic: {
    width: 70,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
  },
  usersName: {
    width: "100%",
    display: "flex",

    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom:5
  },
});

export default PeopleMayYouLike;
