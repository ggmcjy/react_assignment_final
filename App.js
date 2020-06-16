import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppRoutes from './src/routes/AppRoutes';
import { Provider } from 'react-redux';
import UserReducer from './src/redux/userReducer';
import {createStore} from 'redux';
const store = createStore(UserReducer, false)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    )
  }
}
