import React, { Component, PropTypes } from 'react';
//custom native components import
import { requireNativeComponent } from 'react-native';

class Wrapper extends Component{
    render(){
        return <UserInputView {...this.props} />;
    }
}

Wrapper.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}
//export our custom native view as a react component
var UserInputView = requireNativeComponent('UserInputView', Wrapper);
export default Wrapper;
