import React,  { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View
} from 'react-native';


//update user action
import { updateUser } from '../../actions';
//components
import Greeting from '../greeting/greeting';
import UserInput from '../userInput/userInputView';


class App extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <View style={styles.container} >
                <Greeting user={this.props.user} style={styles.greeting} textStyle={styles.textStyle} />

                <UserInput style={styles.userInput} 
                    firstName="Chuck" 
                    lastName="Norris" 
                    onUpdate={this.props.updateUser.bind(this)}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
    },
    greeting:{
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        backgroundColor: '#8BB174',
        alignSelf: 'stretch'
    },
    textStyle:{
        fontSize: 30,
        color: '#2A4849'
    },
    userInput:{
        flex:1,
        backgroundColor: '#B5CA8D',
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});


mapStateToProps = (state) =>{
    return{
        user: state.user
    }
}

//connect updateUser action and user redux state to component
export default connect(mapStateToProps, {updateUser})(App);