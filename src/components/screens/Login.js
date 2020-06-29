import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import style from '../../assets/styles/Splash.style';
import style2 from '../../assets/styles/Login.style';
import color from '../../assets/colors/colors';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/commons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStatus} from '../../redux/userAction';

export class Login extends Component {
  setStatus() {
    this.props.setStatus(true);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style2.header}>
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
          </View>
        </View>
        <View style={style2.line}></View>
        <View style={style2.section}>
          <Text style={[style.text_logo, { color: color.white, fontSize: 25, marginVertical: 25, textAlign: 'center' }]}>LOGIN BLOG</Text>
          <TextInput
            style={style2.Input_text}
            placeholder={'Nhap email or Username'}
            placeholderTextColor={color.white}
            fontFamily={'light'}
            fontSize={12}
            keyboardType={'email-address'} />

          <TextInput
            style={[style2.Input_text, { marginVertical: 15 }]}
            placeholder={'password'}
            placeholderTextColor={color.white}
            fontFamily={'light'}
            secureTextEntry={true}
            fontSize={12}
            keyboardType={'default'} />
          <Button 
            text={'LOGIN'} 
            onPressBtn={() => this.props.setStatus(true)}
          />
          <View style={style2.view_input}>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Register') }}
            >
              <Text style={style2.button}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Forget') }}
            >
              <Text style={style2.button}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <Text style={[style2.text_button, { marginTop: 10, marginLeft: 0 }]}>Or</Text>
          <View style={style2.view_input}>
            <TouchableOpacity>
              <View style={[
                style2.view_input,
                style2.view_button,
                { backgroundColor: color.orange_gg }
              ]}>
                <Icon name="google" size={24} color={color.white} />
                <Text style={style2.text_button}>Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[style2.view_input, style2.view_button]}>
                <Icon name="facebook-official" size={24} color={color.white} />
                <Text style={style2.text_button}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn : state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({setStatus}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login)
