import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Inputs extends Component {
    state = {
        email: '',
        password: '',
        intro: ''
    }

    handleEmail = (text) => {
        this.setState({
            email: text
        })
    }

    handlePassword = (text) => {
        this.setState({
            password: text
        })
    }

    handleIntro = (text) => {
        this.setState({
            intro: text
        })
    }

    register = (email, password, intro) => {
        alert('email' + email + '\npassword' + password + '\nintro' + intro)
    }
  
    render() {
        return(
        <View style={style.container}>
            <TextInput
                style={style.input}
                //下划线颜色
                underlineColorAndroid="transparent"
                //占位符
                placeholder="please input email"
                //占位符字体颜色
                placeholderTextColor="#ccc"
                //字体大写模式
                autoCapitalize="none"
                // 键盘类型
                keyboardType="email-address"
                //键盘上返回键类型, done, go, next, search, send
                returnKeyType="next"
                //文本变更后回调函数
                onChangeText={this.handleEmail}
            />
            <TextInput
                style={style.input}
                //下划线颜色
                underlineColorAndroid="transparent"
                //占位符
                placeholder="please input password"
                //占位符字体颜色
                placeholderTextColor="#ccc"
                //字体大写模式
                autoCapitalize="none"
                //键盘上返回键类型
                returnKeyType="next"
                //是否属于密码类型
                secureTextEntry={true}
                //文本变更后回调函数
                onChangeText={this.handlePassword}
            />

            <TextInput
                style={[style.input,{height: 100}]}
                //下划线颜色
                underlineColorAndroid="transparent"
                //占位符
                placeholder="please input intro"
                //占位符字体颜色
                placeholderTextColor="#ccc"
                //多行设置
                multiline = {true}
                //行数
                numberOfLines = {4}
                //文字的位置靠上
                textAlignVertical = "top"
                //键盘上返回键类型
                returnKeyType="next"
                //文本变更后回调函数
                onChangeText={this.handleIntro}
            />

            <TouchableOpacity
                style = {StyleSheet.submitButton}
                onPress = {
                    () => this.register(this.state.email, this.state.password, this.state.intro)
                }
            >
                <Text style = {style.submitButtonText}> Register</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default Inputs;

const style = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        paddingLeft: 8,
        height: 40,
        borderColor: '#eeeeee',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        alignItems: 'center',
        margin: 15,
        height: 40
    },
    submitButtonText:{
        color: 'white'
    }
})