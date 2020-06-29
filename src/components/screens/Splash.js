import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native';
import style from '../../assets/styles/Splash.style';
import color from '../../assets/colors/colors';

export default class Splash extends Component {
    render() {
        return (
            <View style= { style.container } >
            <View style={style.main_center}>
                <View style={style.view_logo}>
                    <View style={style.logo}>
                        <Text style={style.text_logo}>R</Text>
                    </View>
                    <Text style={[style.text_logo, { color: color.white, fontSize: 25 }]}>
                        Vloger
                    </Text>
                </View>
                <Text
                    style={([style.text_logo],
                        { color: color.white, fontSize: 16, fontFamily: 'bold' })}>
                    Tech blogs, coder and more ...
                </Text>
                <View style={{ margin: 20 }}>
                    <ActivityIndicator size={27} color={color.white} />
                </View>
            </View>
        </View >
        )
    }
}
