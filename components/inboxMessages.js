import { View, Text, Modal, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import mishraFunny from "../assets/icon.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const InboxMessages = (props) => {
  return (
    <>
      <StatusBar statusBarTranslucent={true}></StatusBar>
      <Modal animationType="slide">
        <View>
          <View style={styles.messageHeaders}>
            <Ionicons
              onPress={() => props.inBoxClose()}
              name="arrow-back-circle-sharp"
              size={30}
              color="black"
              style={{ paddingTop: 2, paddingLeft: 4 }}
            />
            <Text style={styles.modalContainer}>INBOX</Text>
          </View>
          <ScrollView style={styles.msgScrollContainer}>
            <View>
              {/* <Text style={styles.textHeading}>Our Team </Text> */}
              <View style={styles.memberCard}>
                <Image
                  style={styles.imageContainer}
                  source={mishraFunny}
                ></Image>
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>Member name</Text>
                  <Text style={styles.memberPosition}>
                    member position will go here
                  </Text>
                </View>
              </View>
              <View style={styles.memberCard}>
                <Image
                  style={styles.imageContainer}
                  source={mishraFunny}
                ></Image>
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>Member name</Text>
                  <Text style={styles.memberPosition}>
                    member position will go here
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footerSendBtn}>
          <MaterialCommunityIcons name="card-plus" size={40} color="white" />
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    // backgroundColor: "red",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    // textAlign: "center",
    padding: 8,
    // height: "100%",
    paddingHorizontal: 36,
    fontSize: 18,
    fontWeight: "bold",
    height: "100%",
  },
  messageHeaders: {
    width: "100%",

    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  footerSendBtn: {
    position: "absolute",
    bottom: 18,
    right: 8, // Adjust this value according to your preference
    borderRadius: 25,
    backgroundColor: "purple",
    padding: 7,
  },
  msgScrollContainer: {
    // backgroundColor: "red",
    height: "100%",
  },
  textHeading: {
    color: "black",
    fontWeight: "900",
    fontSize: 25,
    paddingVertical: 10,
  },
  //   memberCard: {
  //     width: "100%",
  //    paddingLeft:"10%"
  //   },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  memberCard: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
    paddingVertical: 7,
  },
  memberInfo: {
    color: "black",
    padding: 10,
  },
  memberName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  memberPosition: {
    color: "black",
  },
});

export default InboxMessages;
