import React, { Component, PropTypes } from 'react';

const propTypes = {

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
        this._handleClick = this._handleClick.bind(this);
    }

    _handleChange(e){
      this.setState({
        value: e.target.value
      });
    }

    _handleClick(){
      if(this.state.value == ""){
        alert("할 일을 입력하세요.");
        return;
      }
      const data = {
        text: this.state.value,
        completed: false
      }
      this.props.onAdd(data);
      this.setState({
        value: ""
      });
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
            <button onClick={this._handleClick}>추가</button>
            </div>
        );
    }
}

InputTodo.propTypes = propTypes;
InputTodo.defaultProps = defaultProps;

export default InputTodo;
