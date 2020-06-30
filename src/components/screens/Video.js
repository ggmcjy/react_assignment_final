import React, { Component } from 'react';
import { View, Text } from 'react-native';

import style2 from '../../assets/styles/Home.style';
import Header from '../commons/Header';
export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }
  componentDidMount = () =>{
    
  }
  render() {
    const { data } = this.state;
    return (
      <View style={style2.container}>
        <Header />
        <View style={style2.section}>

        </View>
      </View>
    );
  }
}
