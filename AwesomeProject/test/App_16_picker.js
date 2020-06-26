import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

class App extends Component {
    users = [
        {label: '请选择性别', value:''},
        {label: '男', value:'male'},
        {label: '女', value:'female'},
        {label: '其他', value:'other'},
    ]
    state = {user: ''}
    updateUser = (user) => {
        this.setState({user: user})
    }

    render(){
        return(
            <View style = {style.container}>
                <Text style = {style.label}>请选择性别</Text>
                <Picker
                    selectedValue = {this.state.user}
                    onValueChange = {this.updateUser}
                >
                    {
                        this.users.map((o,index) =>
                            <Picker.Item label = {o.label} value = {o.value}/>
                        )
                    }
                </Picker>
                <Text style = {style.label}>你的选择是</Text>
                <Text style = {style.text}>{this.state.user}</Text>
            </View>
        )
    }
}

export default App;

const style = StyleSheet.create({
    container: {
        margin: 50
    },
    label: {
        fontSize: 14,
        color: '#333333'
    },
    text:{
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})
