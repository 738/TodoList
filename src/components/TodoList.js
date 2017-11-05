import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func
};
const defaultProps = {
  todos: [],
  onToggle: () => {console.error("onToggle not defined");},
  onRemove: () => {console.error("onRemove not defined");}
};
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedKey: -1
        }

        this._handleToggle = this._handleToggle.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
    }

    _handleToggle(key){
      this.setState({
        selectedKey: key
      });
      this.props.onToggle(key);
    }

    _handleRemove(key){
      this.props.onRemove(key);
      console.log(key);
    }


    render() {
        return(
            <ul>
              {
                this.props.todos.map((data, i) => {
                  return (<Todo
                            text={data.text}
                            completed={data.completed}
                            key={i}
                            onToggle={() => this._handleToggle(i)}
                            onRemove={() => this._handleRemove(i)}
                          />);
                })
              }
            </ul>
        );
    }
}

class Todo extends Component {
  render() {
    const completedStyle={
      textDecoration: "line-through",
      color: "gray"
    }
    return(
        <div onClick={this.props.onToggle}>
          <li style={this.props.completed ? completedStyle : {} }>
            {this.props.text}
            <button onClick={this.props.onRemove}>
              X
            </button>
          </li>
        </div>
    )
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
