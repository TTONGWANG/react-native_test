import React, { Component } from 'react'
import {View ,Text} from 'react-native'

const App = () =>{
    return (
        <View>
            <View>
                <Text> Code</Text>
            </View>
            // 设置外边框，内边框，颜色
            <View style = {{marginTop:8,padding:8,backgroundColor:'blue'}}>
                <Text style={{color: 'white'}}>code test</Text>
            </View>
            <View style = {{marginTop:8,padding:8,backgroundColor:'blue'}}>
                <Text style={{color: 'white'}}>code test</Text>
            </View>
        </View>
    )
}

export default App;