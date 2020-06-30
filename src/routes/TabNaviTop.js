import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hot from '../components/screens/Tab/Hot';
import News from '../components/screens/Tab/News';
import ListNews from '../components/screens/Tab/ListNews';
import color from '../assets/colors/colors';
const Tab = createMaterialTopTabNavigator();
export default class TabNaviTop extends Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: color.background,
                    labelStyle: {
                        fontSize: 12,
                        fontFamily: "bold",
                    },
                }}
                initialRouteName="Home">
                <Tab.Screen name="Hot" component={Hot} />
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="ListNews" component={ListNews} />
            </Tab.Navigator>
        );
    }
}
