import React,  { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

//import custom native modules
import { NativeModules } from 'react-native';
const RandomGreeting = NativeModules.RandomGreeting;

//project imports



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            greeting: ''
        };
    }

    componentWillMount(){
        RandomGreeting.sayFirstName('Chuck', 'Norris');
        RandomGreeting.say('Liam', 'Neeson').then((value) =>{ this.setState({greeting:value}); });
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Text>{this.state.greeting}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
    }
});


export default App;