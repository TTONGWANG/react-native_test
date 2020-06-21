import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () =>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>
                <Text style = {styles.capitalLetter}>
                    Tong
                </Text>
                <Text>text</Text>
                <Text>
                    Tong's<Text style = {styles.wordBold}>code</Text>is perfect
                </Text>
                <Text style = {styles.italicText}>This is italicText</Text>
                <Text style = {styles.textShadow}>Thanks</Text>
            </Text>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
        padding: 20
    },
    text:{
        color: '#41cdf4'
    },
    capitalLetter:{
        color: 'red',
        fontSize: 20
    },
    wordBold:{
        fontWeight: 'bold',
        color: 'black'
    },
    italicText:{
        color: '#37859b',
        fontStyle: 'italic'
    },
    textShadow:{
        textShadowColor: 'red',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1
    }
})