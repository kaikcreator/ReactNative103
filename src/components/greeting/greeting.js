import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';


export default class extends Component{

    constructor(props){
        super(props);

        this.state = {
            greeting: 'hello!'
        };
    }

    
    render(){
        return (
            <View style={this.props.style}>
                <Text style={this.props.textStyle}>{this.state.greeting}</Text>
            </View>
        );
    }
}
