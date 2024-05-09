import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FlatList from "./components/FlatList";
// import ElevatedCards from "./components/ElevatedCards";
import TrendingPlaces from "./components/TrendingPlaces";
import BlogCards from "./components/BlogCards";
import Members from "./components/Members";
import StatusCards from "./components/StatusCards";
import PeopleMayYouLike from "./components/PeopleMayYouLike";
import FooterNavBar from "./components/FooterNavBar";
import HeaderNavBar from "./components/HeaderNavBar";

export default function App() {
  // let nameFieldData=""
  const [name, setName] = useState("");
  const [nameArray, setNameArray] = useState([]);
  const addNameHandler = () => {
    setNameArray((prev) => [...prev, name]);
  };
  console.log(nameArray);
  return (
    <View style={{ height: "100%" }}>
      <HeaderNavBar></HeaderNavBar>
      <ScrollView style={styles.container}>
        {/* <FlatList></FlatList> */}
        <StatusCards></StatusCards>
        <PeopleMayYouLike></PeopleMayYouLike>
        <TrendingPlaces></TrendingPlaces>
        <BlogCards></BlogCards>       
        <Members></Members>
      </ScrollView>
      <FooterNavBar></FooterNavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    flex: 1,
    // height:700,
    backgroundColor: "black",

    borderLeftWidth: 5,
    borderWidth: 4,
  },
  inputContainer: {
    borderStyle: "solid",
    borderColor: "black",
  },
  textContainer: {
    width: 100,
    backgroundColor: "red",
  },
});
