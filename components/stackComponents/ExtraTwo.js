import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ExtraTwo(props) {
    var {navigation} = props
    return (
        <View>
      <Button title='Go Back' onPress={()=>{navigation.goBack()}}/>
      <Button title='Go to screen 1' onPress={()=>{navigation.navigate('ExtraOne')}}/>

        </View>
    )
}
