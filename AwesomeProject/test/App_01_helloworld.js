import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const App = ()=>{
    return (
        <>
            <View style = { style.view }>
                <Text>Hello World</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    view: {
        height: 200,
        width: 200,
        backgroundColor: "rgba(200, 255, 0, 0.5)"
    }
})

export default App;