import React,  { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

//project imports



class App extends Component {
    
    render(){
        return (
            <View style={styles.container}>
                <Text>Hello bro!!</Text>
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