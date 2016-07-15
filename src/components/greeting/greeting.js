import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

//import custom native modules
import { NativeModules } from 'react-native';
const RandomGreeting = NativeModules.RandomGreeting;


export default class extends Component{

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
            <View style={this.props.style}>
                <Text style={this.props.textStyle}>{this.state.greeting}</Text>
            </View>
        );
    }
}
