import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen(props) {
  var { navigation } = props;
  return (
    <View>
      <Button title='Go to screen 1' onPress={()=>{navController(navigation, 'ExtraOne')}}/>
      <Button title='Go to screen 2' onPress={()=>{navController(navigation, 'ExtraTwo')}}/>
    </View>
  );
}
const navController = (navigation, route) => {
  navigation.navigate(route);
};
