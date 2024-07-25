import {
  View,
  Text,
  StyleSheet,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as DocumentPicker from "expo-document-picker";

import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
// import DocumentPicker from 'react-native-document-picker';
const PostBtnModal = (props) => {
  console.log("object")
  const backendUrl = "http://localhost:8000";
  const filePicker = async () => {axios.post("http:localhost:8000")
    let result = await DocumentPicker.getDocumentAsync({});
    const formData = new FormData();

    const file = result.assets[0];

    // Create a form data object

    formData.append("file", {
      uri: file.uri,
      type: file.mimeType,
      name: file.name,
    });
    try {
      const response = await axios.post(
        `${backendUrl}/upload/video`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response)
    } catch (err) {
      console.log(err);
    }
    alert(file.name);
    console.log(result);
  };
  return (
    <Modal transparent>
      <TouchableWithoutFeedback onPress={() => props.onModalClose()}>
        <View style={{ height: "100%" }}></View>
      </TouchableWithoutFeedback>
      <View style={styles.actionContainer}>
        <View style={styles.actionCard}>
          <View>
            <MaterialCommunityIcons
              name="circle-double"
              size={40}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.cardText}>Status</Text>
          </View>
          <View>
            <FontAwesome5
              name="images"
              size={40}
              color="white"
              style={styles.icon}
              onPress={filePicker}
            />
            <Text style={styles.cardText}>Images</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  actionContainer: {
    width: "100%",
    // backgroundColor: "red",
    // height: 40,
    position: "absolute",
    bottom: 90,
    display: "flex",
    alignItems: "center",
  },
  actionCard: {
    width: "80%",
    backgroundColor: "white",
    // height: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#8e44ad",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    paddingBottom: 10,
  },
  icon: {
    paddingTop: 10,
  },
});

export default PostBtnModal;
