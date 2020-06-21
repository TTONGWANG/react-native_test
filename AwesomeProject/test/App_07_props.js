import React, {Component} from 'react'
import { Text, View, StyleSheet,Alert } from 'react-native'

export default class SiteNameComponent extends Component{
    constructor(props){
        super(props)
        this.state = {name: props.name}
    }

    updateState = () => {
        const name = this.state.name = 'Tong is cool' ? 'Tong is not cool': 'Tong is cool'
        this.setState({
            name: name
        })
    }

    render(){
        const {name} = this.state
        return (
            <View>
                <Text onPress = {this.updateState}></Text>
            </View>
        )
    }
}

export default class App extends Component {
    render(){
        return(
            <View style = {style.container}>
                <SiteNameComponent name = {'Tong is cool'}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        margin: 10
    }
})