import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PropTypes from 'prop-types';

import Home from '../routes/BottonNav';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';

import Splash from '../components/screens/Splash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStatus } from '../redux/userAction';



//create
const Stack = createStackNavigator();


export class AppRoutes extends Component {
    state = {
        isLoading: true,
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 3000);
    };
    render() {
        const { isLoading } = this.props;
        const { isLoggedIn } = this.props;
        return (

            <NavigationContainer>
                {isLoading ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={'Splash'} component={Splash} />
                    </Stack.Navigator>
                ) : isLoggedIn ? (
                    <Home />
                ) : (
                            <Stack.Navigator>
                                <Stack.Screen name={'Register'} component={Register} />
                                <Stack.Screen name={'Login'} component={Login} />
                            </Stack.Navigator>
                        )}
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
