import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

var request_url = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
                  

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        }

    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData=()=>{
        fetch(request_url)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                movies: responseData.movies
            })
        })
        .catch(() => console.log("Can’t get result"))
    }


    render(){
        if(!this.state.movies){
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovie(movie)
    }

    renderLoadingView(){
        return(
            <View style = {style.container}>
                <Text>Loading.....</Text>
            </View>
        )
    }

    renderMovie(movie) {
        return (
           
                <View style = {style.container}>
                    <Image 
                        style = {style.thumbnail}
                        source = {{uri: movie.posters.thumbnail}}
                    />

                <View style = {style.rightContainer}>
                    <Text style = {style.title}>{movie.title}</Text>
                    <Text style = {style.year}>{movie.year}</Text>
                </View>
                </View>
        ) 
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 100,
        height: 80
    },
    rightContainer:{
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    }
})