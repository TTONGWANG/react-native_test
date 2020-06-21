import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class App extends Component{
    state = {
        name: 'Tong',
        type: 'cool'
    }

    updateState = () => {
        const type = this.state.type == 'cool' ? 'not cool' : 'cool'
        this.setState({type})
    }

    render(){
        const {name,type} = this.state
        return (
            <View style = {StyleSheet.container}>
                <Text onPress={this.updateState}>name: {name}</Text>
                <Text>Type: {type}</Text>
            </View>
        )
    }
}