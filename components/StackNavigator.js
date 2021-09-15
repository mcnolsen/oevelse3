import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import DetailsScreen from './DetailsScreen'
import ExtraOne from './stackComponents/ExtraOne'
import ExtraTwo from './stackComponents/ExtraTwo'
export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Details'component={DetailsScreen}/>
            <Stack.Screen name='ExtraOne' component={ExtraOne}/>
            <Stack.Screen name='ExtraTwo' component={ExtraTwo}/>
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();
