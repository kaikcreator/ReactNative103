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
        RandomGreeting.sayFirstName('Liam', 'Neeson');
        RandomGreeting.say('Chuck', 'Norris').then((value) =>{ this.setState({greeting:value}); });
    }

    //We want to call a method when props are updated
    componentWillReceiveProps(nextProps) {
        RandomGreeting.say(nextProps.user.firstName, nextProps.user.lastName)
        .then((value) =>{
            this.setState({greeting:value}); });
    }

    //prevent extra rendering when props are updated but greeting promise has not been resolved yet
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.greeting !== this.state.greeting;
    }
    
    render(){
        return (
            <View style={this.props.style}>
                <Text style={this.props.textStyle}>{this.state.greeting}</Text>
            </View>
        );
    }
}
