import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';


export default class App extends Component {
    constructor () {
        super ();
        this.label = {false: 'close', true: 'open'}
        this.state = {
            switchValue: true
        }
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    render(){
        return(
            <View style = {style.container}>
                <Switch onValueChange = {this.toggleSwitch}
                value = {this.state.switchValue}
                />
                <View><Text>Switch 当前的状态:  {this.label[this.state.switchValue]}</Text></View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})