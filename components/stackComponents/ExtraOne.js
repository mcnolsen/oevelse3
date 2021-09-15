import React from "react";
import { View, Text, Button } from "react-native";

export default function ExtraOne(props) {
  var { navigation } = props;
  return (
    <View>
      <Button title='Go Back' onPress={()=>{navigation.goBack()}}/>
      <Button title='Go to screen 2' onPress={()=>{navigation.navigate('ExtraTwo')}}/>
    </View>
  );
}
