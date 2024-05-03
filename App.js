import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // let nameFieldData=""
  const [name, setName] = useState("");
  const [nameArray, setNameArray] = useState([]);
  const addNameHandler = () => {
    setNameArray((prev) => [...prev, name]);
  };
  console.log(nameArray);
  return (
    <View style={styles.container}>
      <View>
        <Text>Name form</Text>
        <TextInput
          placeholder="enter name "
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <View style={styles.inputContainer}>
          <Button title="add name" onPress={addNameHandler}></Button>
        </View>
      </View>
      <View>
        {nameArray.map((current,index) => {
          return <Text key={index} style={styles.textContainer}>{current}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:700,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth:5,
    borderWidth:4,
    borderColor:"blue"
  },
  inputContainer: {
    borderStyle: "solid",
    borderColor: "black",
  },textContainer:{
    width:100,
    backgroundColor:"red"
  }
});
