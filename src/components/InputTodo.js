import React, { Component, PropTypes } from 'react';

const propTypes = {

};
const defaultProps = {

};
class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          keyword: ""
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    _handleChange(e){
      this.setState({
        keyword: e.target.value
      });
    }

    _handleKeyPress(e){
      if(e.keyCode == 13){
        console.log("enter is pressed");
      }
    }

    render() {
        return(
            <div>
              <input
                type="text"
                placeholder="할 일을 적으시오"
                value={this.state.value}
                onChange={this._handleChange}
                onKeyPress={this._handleKeyPress}
              />
            </div>
        );
    }
}

InputTodo.propTypes = propTypes;
InputTodo.defaultProps = defaultProps;

export default InputTodo;
