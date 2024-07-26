import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";

const PostBtnModal = (props) => {
  const backendUrl = "http://192.168.0.113:8000";

  const filePicker = async () => { 
    try {
         const response = await axios.get(`${backendUrl}`);
    console.log(response);
    } catch (error) {
      console.log(error)
    }
  
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "cancel") {
      Alert.alert("No file selected");
      return;
    }

    const file = result;
  
    // Create a form data object
    const formData = new FormData();
    formData.append("videos12345", {
      uri: file.uri,
      type: file.mimeType || "video/mp4",
      name: file.name,
    });

    try {
      const response = await axios.post(
        `${backendUrl}/videos/upload/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload Success:", response.data);
    } catch (err) {
      console.error(
        "Upload Error:",
        err.response ? err.response.data : err.message
      );
    }
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
    position: "absolute",
    bottom: 90,
    display: "flex",
    alignItems: "center",
  },
  actionCard: {
    width: "80%",
    backgroundColor: "#8e44ad",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
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
