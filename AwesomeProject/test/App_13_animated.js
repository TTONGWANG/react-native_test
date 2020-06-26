import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, Alert,TextInput, TouchableOpacity } from 'react-native';

class App extends Component {
    UNSAFE_componentWillMount = () => {
        this.animatedWidth = new Animated.Value(50);
        this.animatedHeight = new Animated.Value(100);
    }

    animateBox = () => {
        Animated.timing(this.animatedWidth,{
            toValue: 200,
            duration: 1000
        }).start()
        Animated.timing(this.animatedHeight,{
            toValue: 500,
            duration: 500
        }).start()
    }
    render(){
        const animatedStyle = {
            width: this.animatedWidth,
            height: this.animatedHeight
        }

        return(
            <TouchableOpacity
                style = {styles.container}
                onPress = {this.animateBox}>
                <Animated.View style = {[styles.box, animatedStyle]}/>
            
            </TouchableOpacity>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'blue',
        width: 50,
        height: 100
    }
})