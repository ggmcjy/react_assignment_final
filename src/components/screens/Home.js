import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from '../../assets/styles/Splash.style';
import color from '../../assets/colors/colors';
import style2 from '../../assets/styles/Home.style';
import Header from '../commons/Header';
import TabNaviTop from '../../routes/TabNaviTop';
export default class Home extends Component {
	render() {
		return (
			<View style={style2.container}>
				<Header />
				<View style={style2.section}>
					<TabNaviTop />
				</View>
			</View>
		)
	}
}
