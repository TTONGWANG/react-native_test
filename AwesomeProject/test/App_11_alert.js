import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button,Alert } from 'react-native'

const App = () => {
    const showAlert1 = () => {
        Alert.alert('send data success')
    }

    const showTip = () =>{
        Alert.alert('delete success')
    }

    const showAlert2 = () => {
        Alert.alert(
            'Alert',
            'Are you sure you want to delete?',
            [
                {text: 'Yes', onPress: () => showTip()},
                {text: 'No', style: 'cancel'}
            ],
            {cancelable: false}
        )
    }

    return(
        <View style={{alignItems: "center"}}>
            <TouchableOpacity onPress = {showAlert1} style = {StyleSheet.button}>
                <Text>send</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {showAlert2} style = {StyleSheet.button}>
                <Text>delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default App;

const style = StyleSheet.create({
    button:{
        backgroundColor: '#4ba37b',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    }
})