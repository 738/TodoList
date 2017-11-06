import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  onAdd: PropTypes.func
};
const defaultProps = {
  onAdd: () => { console.error('onAdd not defined'); }
};
class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ""
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    _handleChange(e){
      this.setState({
        value: e.target.value
      });
    }

    _handleKeyPress(e){
      if(e.charCode === 13){
        this.props.onAdd(this.state.value);
        this.setState({
          value: ""
        });
      }
    }

    render() {
        return(
            <div className="inputTodo">
              <input
                type="text"
                placeholder="할 일을 적으시오."
                value={this.state.value}
                maxLength="30"
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
