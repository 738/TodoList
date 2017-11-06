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

        }
    }

    render() {
        return(
            <ul class="todoList">
              {
                this.props.todos.map((data, i) => {
                  return (<Todo
                            text={data.text}
                            completed={data.completed}
                            key={i}
                            onToggle={() => this.props.onToggle(i)}
                            onRemove={() => this.props.onRemove(i)}
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
        <div class="todo z-depth-4">
          <div onClick={this.props.onToggle}>
            <li style={this.props.completed ? completedStyle : {} }>
              {this.props.text}
            </li>
          </div>
          <div>
            <a class="waves-effect waves-light btn" onClick={this.props.onRemove}>X</a>
          </div>
        </div>
    )
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
