import React, { Component } from 'react';
import { View, Text } from 'react-native';
import color from '../../assets/colors/colors';

export default class Header extends Component {
    render() {
        return (
            <View style={{
                flex: 0.9,
                shadowColor:color.gray,
                shadowOffset:{
                    width:0,
                    height:5,
                },
                shadowOpacity:0.7,
                shadowRadius:4,
                elevation:5,
                backgroundColor: color.background,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 20,
                            height: 20,
                            margin: 4,
                            borderRadius: 20 / 2,
                            backgroundColor: color.white,
                        }}>
                            <Text style={{
                                fontFamily: 'bold',
                                fontSize: 13,
                                color: color.background
                            }}>R</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'reqular',
                            fontSize: 13,
                            color: color.white,
                        }}>Vlogger
                        </Text>
                    </View>
                </View>
                <Text style={{
                    fontFamily: 'regular',
                    fontSize: 10,
                    color: color.white,
                }}>Tech blog . Coder and More
                </Text>
            </View>
        );
    }
}
