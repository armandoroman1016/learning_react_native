import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  
  return(
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button title = "Go to Components Demo" onPress = {() => navigation.navigate("Components")}/>
      <TouchableOpacity onPress = {() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:"#47ba82"
  }
});

export default HomeScreen;
