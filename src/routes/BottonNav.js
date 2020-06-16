import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Home from '../components/screens/Home';
import User from '../components/screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default class BottonNav extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="User" component={User} />
            </Tab.Navigator>
        )
    }
}
