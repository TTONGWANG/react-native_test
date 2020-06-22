import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button,ActivityIndicator } from 'react-native'

class App extends Component {
    state = { animating: true}

    closeActivityIndicator = () =>{
        this.setState({ animating: !this.state.animating})
    }

    componentDidMount =() => this.closeActivityIndicator()
    render(){
        const animation = this.state.animating
        return(
            <View style = {style.container}>
                <ActivityIndicator
                    animating = {animation}
                    color = '#bc2b78'
                    size = "large"
                    style = {style.ActivityIndicator}/>
                <Button onPress = {this.ActivityIndicator} title = "切换显示loading"></Button>
            </View>
        )
    }
}

export default App;

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70
    },
    ActivityIndicator: {
        height: 80
    }
})