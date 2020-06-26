import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

class App extends Component {
    state = {
        hidden: false,
        barStyle: 'light-content'
    }

    changeHidden = () => {
        let hidden = this.state.hidden ? false : true
        this.setState({hidden: hidden})
    }

    changeBarStyle = () => {
        let barStyle =this.state.barStyle == 'light-content' ? 'dark-content' : 'light-content'
        this.setState({barStyle: barStyle})
    }

    render(){
        return(
            <View>
                <StatusBar barStyle = {this.state.barStyle} hidden = {this.state.hidden} />
                <TouchableOpacity style = {style.button} onPress = {this.changeHidden}>
                    <Text>显示或隐藏</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.button} onPress = {this.changeBarStyle}>
                    <Text>改变颜色</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default App;

const style = StyleSheet.create({
    button:{
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
    }
})
