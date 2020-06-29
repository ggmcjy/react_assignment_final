import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import color from '../../assets/colors/colors';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'LOGIN',
            onPressBtn: props.onPressBtn
        };
    }
    
    render() {
        return (
            <TouchableOpacity onPress={this.state.onPressBtn}>
                <Text style={{
                    fontFamily:'bold', 
                    fontSize: 16, 
                    color:color.background, 
                    backgroundColor:color.white,
                    textAlign:'center',
                    padding: 10,
                    marginTop: 20,
                    marginHorizontal: 8,
                    borderRadius: 16,
                    }}>
                    {this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
