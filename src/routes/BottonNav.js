import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Home from '../components/screens/Home';
import User from '../components/screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../assets/colors/colors';
const Tab = createBottomTabNavigator();

export default class BottonNav extends Component {
    render() {
        return (
            <Tab.Navigator 
            tabBarOptions={{
                activeBackgroundColor:color.bottom_nav,
                inactiveBackgroundColor:color.bottom_nav,
                inactiveTintColor:color.white,
                activeTintColor:color.green,
                labelStyle: {
                    fontSize: 12,
                    fontFamily: "bold",
                    paddingBottom:3,
                },
            }}
            initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'HOME',
                        tabBarIcon: ({focused}) => (
                            <Icon 
                            name="home" 
                            color={focused ? color.green : color.white} 
                            size={20} 
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Viedo"
                    component={User}
                    options={{
                        tabBarLabel: 'WATCH',
                        tabBarIcon: ({focused}) => (
                            <Icon 
                            name="film" 
                            color={focused ? color.green : color.white} 
                            size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={User}
                    options={{
                        tabBarLabel: 'PROFILE',
                        tabBarIcon: ({focused}) => (
                            <Icon 
                            name="user-circle" 
                            color={focused ? color.green : color.white} 
                            size={20} />
                        ),
                    }}
                />

            </Tab.Navigator>
        )
    }
}
