import React, { Component } from 'react'
import {View ,Text} from 'react-native'

class App extends React.Component {
    render(){
        return (
            <View>
                <View style={style.container}>
                    {/* 没有样式继承，每一个都要单独写样式 */}
                    <View style = {[styles.txt, {color: '#333300'}]}>
                        <Text>react Component</Text>
                    </View>
                    {/* 直接写样式 */}
                    <View style = {styles.card}></View>
                    {/* 创建式样式 */}
                    <View style = {{marginTop:8,padding:8,backgroundColor:'blue'}}></View>
                    {/* 合并多个样式，同样的设置，右边优先级高 */}
                    <View style = {[styles.card, {backgroundColor: 'yellow'}]}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        padding: 8,
        backgroundColor: '#eeeeee'
    },
    card: {
        height: 100,
        backgroundColor: '#ffffff'
    }
})

export default App;