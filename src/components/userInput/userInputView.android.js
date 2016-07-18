import React, { Component, PropTypes } from 'react';
//custom native components import
import { requireNativeComponent, View, DeviceEventEmitter } from 'react-native';


//Wrapper around UserInputView in order to add properties and events
class Wrapper extends Component{
    constructor(props) {
        super(props);
        this._onUpdate = this._onUpdate.bind(this);
    }

    componentWillMount() {
      DeviceEventEmitter.addListener('onUpdate', this._onUpdate);
    }

    componentWillUnmount() {
      DeviceEventEmitter.removeListener('onUpdate', this._onUpdate);
    }

    _onUpdate(event){
        if (!this.props.onUpdate) {
            return;
        }
        this.props.onUpdate(event.user);
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

//export our custom native view as a react component
var UserInputView = requireNativeComponent('UserInputView', iface);
export default Wrapper;
