import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert,TextInput } from 'react-native'
// import {AsyncStorage} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends Component {
    state = {
        'name': 'Tong',
        'inputText': 'hi'
    }

     readName = async() =>{
        try {
            const value = await AsyncStorage.getItem('name')
            if (value !== null) {
                this.setState({
                    'name': value
                })
            }
            Alert.alert("read success")
        } catch(e){
            console.log(e);
            alert.alert("read failed")
        }
    }

    setName = () => {
        AsyncStorage.setItem('name', this.state.inputText);
        Alert.alert("save success")
    }

    render(){
        return (
            <View style = {style.container}>
                <TextInput
                    style = {style.textInput}
                    autoCapitalize = 'none'
                    value = {this.state.inputText}
                />
                <View style = {{flexDirection: 'row'}}>
                    <TouchableHighlight style = {[style.button, {marginRight: 8}]} onPress = {this.setName}>
                        <Text style={style.buttonTxt}>save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[style.button, {backgroundColor: 'blue'}]} onPress = {this.readName}>
                        <Text style={style.buttonTxt}>read</Text>
                    </TouchableHighlight>
                </View>
                <View style = {{marginTop:8}}>
                    <Text>value rightNow：{this.state.name}</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create ({
    container: {
        margin: 10
    },
    textInput: {
        margin: 5,
        height: 44,
        width: '100%',
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    button: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        width: 100,
        backgroundColor: 'red'
    },
    buttonTxt:{
        justifyContent: 'center',
        color: '#ffffff'
    }
})