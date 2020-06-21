import React, { Component }from 'react'
import { AppRegistry, StyleSheet, View, Text, ScrollView } from 'react-native'

export default class App extends Component {
    render(){
        return (
            <ScrollView>
                {/* 普通图片 */}
                <Image
                    source = {require('./assets/1.png')}
                />
                {/* 网络图片 */}
                <Image 
                    style={{margin: 10, width: 177, height: 100}}
                    source = {{uri: 'https://www.twle.cn/static/i/img1.jpg'}}
                />
                {/* 图片显示模式，contain，按照正常的比例缩放到整个可以刚好放进来 */}
                <Image
                    style = {{margin: 10, width: 200, height: 200, resizeMode: 'contain', borderWidth: 1, borderColor: '#000'}}
                    source = {require('./assets/img1.jpg')}
                />
                {/* 不会变形，放大图片至刚好覆盖整个被容 */}
                <Image
                    style = {{margin: 10, width: 200, height: 200, resizeMode: 'cover', borderWidth: 1, borderColor: '#000'}}
                    source = {require('./assets/img1.jpg')}
                />
                {/* 直接将图片拉升成设置的大小，会变形 */}

                <Image
                    style = {{margin: 10, width: 200, height: 200, resizeMode: 'stretch', borderWidth: 1, borderColor: '#000'}}
                    source = {require('./assets/img1.jpg')}
                />
            </ScrollView>
        )
    }
}

