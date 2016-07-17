import React, { Component, PropTypes } from 'react';
//custom native components import
import { requireNativeComponent, View } from 'react-native';


//Wrapper around UserInputView in order to add properties and events
class Wrapper extends Component{
    constructor(props) {
        super(props);
        this._onUpdate = this._onUpdate.bind(this);
    }

    _onUpdate(event){
        if (!this.props.onUpdate) {
            return;
        }
        this.props.onUpdate(event.nativeEvent.user);
    }

    render(){
        return <UserInputView {...this.props} onUpdate = {this._onUpdate} />;
    }
}

//define available properties
var iface = {
  name: 'UserInputView',
  propTypes: {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    onUpdate: PropTypes.func,
    ...View.propTypes
  }
}
/*Wrapper.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    onUpdate: PropTypes.func,
    ... View.propTypes
}*/


//export our custom native view as a react component
var UserInputView = requireNativeComponent('UserInputView', iface); //Wrapper);
export default Wrapper;
