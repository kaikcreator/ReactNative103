import React, { Component, PropTypes } from 'react';
//custom native components import
import { requireNativeComponent } from 'react-native';

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

Wrapper.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,

    onUpdate: PropTypes.func
}
//export our custom native view as a react component
var UserInputView = requireNativeComponent('UserInputView', Wrapper);
export default Wrapper;
